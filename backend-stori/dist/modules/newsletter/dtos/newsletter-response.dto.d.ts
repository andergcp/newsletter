import { NewsletterStatus } from "../newsletter.entity";
export declare class NewsletterResponse {
    id: string;
    fileUrl: string;
    name: string;
    recipientsEmails: string[];
    subject: string;
    sendAt?: Date;
    status?: NewsletterStatus;
}
