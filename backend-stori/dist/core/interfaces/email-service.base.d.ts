export declare const EmailServiceSymbol: unique symbol;
export interface EmailData {
    recipients: string[];
    subject: string;
    attachmentUrl: string;
    unsubscribeUrl: string;
    htmlEmailTemplate?: string;
}
export interface EmailService {
    sendEmailWithAttachment(emailData: EmailData): Promise<boolean>;
}
