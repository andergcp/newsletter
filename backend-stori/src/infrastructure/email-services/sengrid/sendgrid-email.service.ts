import { Inject, Injectable } from '@nestjs/common';
import { MailService } from '@sendgrid/mail';
import { AttachmentData } from '@sendgrid/helpers/classes/attachment';
import { MailDataRequired } from '@sendgrid/helpers/classes/mail';

import { ConfigService } from '@nestjs/config';
import { EmailData, EmailService } from '@core/interfaces';
import { getBasicHtmlEmailTemplate } from '@core/services/email-service/email.template';
import {
  CloudService,
  CloudServiceSymbol,
} from '@core/interfaces/cloud-service.base';

const FROM_EMAIL = 'andergcp@gmail.com';

@Injectable()
export class SengridEmailService implements EmailService {
  private sendgridApiKey: string;
  private sendgridMail: MailService;
  constructor(
    @Inject(CloudServiceSymbol)
    private readonly cloudService: CloudService,
    private configService: ConfigService,
  ) {
    this.sendgridApiKey = this.configService.get<string>(
      'sendgrid.sendgridApiKey',
    );
    this.sendgridMail = new MailService();
  }

  async sendEmailWithAttachment({
    recipients,
    subject,
    attachmentUrl,
    htmlEmailTemplate,
  }: EmailData): Promise<boolean> {
    try {
      // Getting the  file from S3
      const file: string = await this.cloudService.downloadFile(attachmentUrl);

      this.sendgridMail.setApiKey(this.sendgridApiKey);
      const attachments: AttachmentData[] = [
        {
          content: file,
          filename: attachmentUrl,
          type: 'application/pdf',
          disposition: 'attachment',
        },
      ];

      for (const recipient of recipients) {
        const unsubscribeUrl = this._getUnsubscribeUrl(recipient);
        const mailData: MailDataRequired = {
          to: recipient,
          from: FROM_EMAIL,
          subject,
          html: htmlEmailTemplate || getBasicHtmlEmailTemplate(unsubscribeUrl),
          attachments,
        };

        const response = await this.sendgridMail.send(mailData);
        if (!response[0]) {
          return false;
        }
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  _getUnsubscribeUrl(email: string): string {
    const frontendUrl = this.configService.get<string>('app.frontendUrl');
    return `${frontendUrl}/unsubscribe?email=${email}`;
  }
}
