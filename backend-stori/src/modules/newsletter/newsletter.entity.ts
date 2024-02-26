import { InvalidArgumentException } from '@core/exceptions';
import { Entity } from '@core/interfaces/entity.base';

export interface NewsletterProps {
  fileUrl: string;
  name: string;
  recipientsEmails: string[];
  subject: string;
  sendAt?: Date;
  status?: NewsletterStatus;
}

export enum NewsletterStatus {
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  SENT = 'SENT',
}

export class Newsletter extends Entity<NewsletterProps> {
  set status(status: NewsletterStatus) {
    this.props.status = status;
  }

  validateProps(props: NewsletterProps): void {
    if (props.recipientsEmails) {
      const uniqueEmails =
        new Set(props.recipientsEmails).size === props.recipientsEmails.length;
      if (!uniqueEmails)
        throw new InvalidArgumentException('Emails must be unique');
    }
  }
}
