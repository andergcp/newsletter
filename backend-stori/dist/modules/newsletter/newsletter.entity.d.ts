import { Entity } from '@core/interfaces/entity.base';
export interface NewsletterProps {
    fileUrl: string;
    name: string;
    recipientsEmails: string[];
    subject: string;
    sendAt?: Date;
    status?: NewsletterStatus;
}
export declare enum NewsletterStatus {
    FAILED = "FAILED",
    PENDING = "PENDING",
    SENT = "SENT"
}
export declare class Newsletter extends Entity<NewsletterProps> {
    set status(status: NewsletterStatus);
    validateProps(props: NewsletterProps): void;
}
