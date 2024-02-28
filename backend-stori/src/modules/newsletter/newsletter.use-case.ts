import { Inject, Injectable } from '@nestjs/common';
import {
  DatabaseServices,
  DatabaseServicesSymbol,
  EmailData,
  EmailService,
  EmailServiceSymbol,
} from '@core/interfaces';
import { CreateNewsletterInput } from './dtos/newsletter-request.dto';
import { Newsletter, NewsletterStatus } from './newsletter.entity';
import { SubscriptionUseCases } from '@modules/subscription/subscription.use-case';
import { StatisticUseCases } from '@modules/statistic/statistic.use-case';
import {
  Subscription,
  SubscriptionStatus,
} from '@modules/subscription/subscription.entity';

@Injectable()
export class NewsletterUseCases {
  constructor(
    @Inject(DatabaseServicesSymbol)
    private readonly databaseServices: DatabaseServices,
    @Inject(EmailServiceSymbol)
    private readonly emailService: EmailService,
    private readonly subscriptionUseCases: SubscriptionUseCases,
    private readonly statisticUseCases: StatisticUseCases,
  ) {}

  async createNewsletter(
    createNewsletterDto: CreateNewsletterInput,
  ): Promise<Newsletter> {
    const newsletter = new Newsletter({ props: createNewsletterDto });
    newsletter.status = NewsletterStatus.PENDING;

    const persistedNewsletter =
      await this.databaseServices.newsletters.create(newsletter);

    // Send the newsletter to the recipients or schedule it
    // Schedule will be handled with Sendgrid API
    const emailData: EmailData = {
      recipients: createNewsletterDto.recipientsEmails,
      subject: createNewsletterDto.subject,
      attachmentUrl: createNewsletterDto.fileUrl,
    };

    // TODO: Modify the sendEmailWithAttachment method to receive and schedule the email sending
    const sendReponse: boolean =
      await this.emailService.sendEmailWithAttachment(emailData);
    if (!sendReponse) {
      persistedNewsletter.status = NewsletterStatus.FAILED;
      await this.databaseServices.newsletters.update(
        persistedNewsletter.id,
        persistedNewsletter,
      );
      return persistedNewsletter;
    }

    // If there are recipients, create the subscriptions if they don't exist
    if (persistedNewsletter.props.recipientsEmails.length) {
      await this.createNewsletterSubscriptions(
        persistedNewsletter.props.recipientsEmails,
        persistedNewsletter.id,
      );
    }

    persistedNewsletter.status = NewsletterStatus.SENT;
    await this.databaseServices.newsletters.update(
      persistedNewsletter.id,
      persistedNewsletter,
    );

    this.statisticUseCases.createStatistic({
      deliveredAt: persistedNewsletter.createdAt,
      recipientsQuantity: createNewsletterDto.recipientsEmails.length,
    });

    return persistedNewsletter;
  }

  findAllNewsletters(): Promise<Newsletter[]> {
    return this.databaseServices.newsletters.findAll();
  }

  async findNewsletterById(id: string): Promise<Newsletter> {
    return this.databaseServices.newsletters.findById(id);
  }

  private async createNewsletterSubscriptions(
    emails: string[],
    newsletterId: string,
  ): Promise<void> {
    if (!emails.length) return;

    const subscriptions: Subscription[] =
      await this.subscriptionUseCases.findAllSubscriptions({
        newsletterId,
      });

    const emailsToSubscribe = emails.filter(
      (email) =>
        !subscriptions.find(
          (subscription) => subscription.props.email === email,
        ),
    );
    if (!emailsToSubscribe.length) return;

    await Promise.all(
      emailsToSubscribe.map((email) => {
        this.subscriptionUseCases.createSubscription({
          email,
          newsletterId,
          status: SubscriptionStatus.SUBSCRIBED,
        });
      }),
    );
  }
}
