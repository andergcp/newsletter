import { NewsletterUseCases } from './newsletter.use-case';
import { CreateNewsletterInput } from './dtos/newsletter-request.dto';
import { NewsletterResponse } from './dtos/newsletter-response.dto';
export declare class NewsletterResolver {
    private newsletterUseCases;
    constructor(newsletterUseCases: NewsletterUseCases);
    createNewsletter(createNewsletterInput: CreateNewsletterInput): Promise<NewsletterResponse>;
    findNewsletters(): Promise<NewsletterResponse[]>;
}
