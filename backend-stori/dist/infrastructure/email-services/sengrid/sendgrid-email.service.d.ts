import { EmailData, EmailService } from '@core/interfaces';
import { CloudService } from '@core/interfaces/cloud-service.base';
import { ConfigService } from '@nestjs/config';
export declare class SengridEmailService implements EmailService {
    private readonly cloudService;
    private configService;
    private sendgridApiKey;
    private sendgridMail;
    constructor(cloudService: CloudService, configService: ConfigService);
    sendEmailWithAttachment({ recipients, subject, attachmentUrl, unsubscribeUrl, htmlEmailTemplate, }: EmailData): Promise<boolean>;
}
