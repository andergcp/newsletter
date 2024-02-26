import {
  DatabaseServices,
  DatabaseServicesSymbol,
  EmailData,
  EmailService,
  EmailServiceSymbol,
} from '@core/interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { Newsletter } from './newsletter.entity';
import { CreateNewsletterInput } from './dtos/newsletter-request.dto';
import { NewsletterStatus } from './newsletter.entity';
import { SubscriptionUseCases } from '@modules/subscription/subscription.use-case';
import {
  Subscription,
  SubscriptionStatus,
} from '@modules/subscription/subscription.entity';
import { InvalidArgumentException } from '@core/exceptions';

@Injectable()
export class NewsletterUseCases {
  constructor(
    @Inject(DatabaseServicesSymbol)
    private readonly databaseServices: DatabaseServices,
    @Inject(EmailServiceSymbol)
    private readonly emailService: EmailService,
    private subscriptionUseCases: SubscriptionUseCases,
  ) {}

  async createNewsletter(
    createNewsletterDto: CreateNewsletterInput,
  ): Promise<Newsletter> {
    // Newsletter names should be unique
    const newsletterWithSameName =
      await this.databaseServices.newsletters.findAll({
        name: createNewsletterDto.name,
      });
    if (newsletterWithSameName.length)
      throw new InvalidArgumentException(
        'Newsletter with the same name already exists',
      );

    const newsletter = new Newsletter({ props: createNewsletterDto });
    newsletter.status = NewsletterStatus.PENDING;

    const persistedNewsletter =
      await this.databaseServices.newsletters.create(newsletter);

    // Send the newsletter to the recipients or schedule it
    // Schedule handled with Sendgrid API
    const emailData: EmailData = {
      recipients: createNewsletterDto.recipientsEmails,
      subject: createNewsletterDto.subject,
      attachmentUrl: createNewsletterDto.fileUrl,
      unsubscribeUrl: 'https://stori.com/unsubscribe', // TODO: THIS IS THE EMAL I'LL USE TO UNSUBSCRIBE AN SPECIFIC EMAIL CONCAT THE EMAIL
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

    // TODO: Send the newsletter to the recipients if is not scheduled
    // TODO: If sent save the newsletter statistics
    // TODO: If scheduled save the newsletter to be sent later
    return persistedNewsletter;
  }

  findAllNewsletters(): Promise<Newsletter[]> {
    return this.databaseServices.newsletters.findAll();
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
