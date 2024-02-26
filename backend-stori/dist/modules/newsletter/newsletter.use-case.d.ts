import { DatabaseServices, EmailService } from '@core/interfaces';
import { Newsletter } from './newsletter.entity';
import { CreateNewsletterInput } from './dtos/newsletter-request.dto';
import { SubscriptionUseCases } from '@modules/subscription/subscription.use-case';
export declare class NewsletterUseCases {
    private readonly databaseServices;
    private readonly emailService;
    private subscriptionUseCases;
    constructor(databaseServices: DatabaseServices, emailService: EmailService, subscriptionUseCases: SubscriptionUseCases);
    createNewsletter(createNewsletterDto: CreateNewsletterInput): Promise<Newsletter>;
    findAllNewsletters(): Promise<Newsletter[]>;
    private createNewsletterSubscriptions;
}
