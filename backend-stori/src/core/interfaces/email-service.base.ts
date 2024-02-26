export const EmailServiceSymbol = Symbol.for('EmailService');

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
