import { Entity } from '@core/interfaces/entity.base';

export interface SubscriptionProps {
  email: string;
  newsletterId: string;
  status: SubscriptionStatus;
}

export enum SubscriptionStatus {
  SUBSCRIBED = 'SUBSCRIBED',
  UNSUBSCRIBED = 'UNSUBSCRIBED',
}
export class Subscription extends Entity<SubscriptionProps> {
  validateProps(props: SubscriptionProps): void {
    console.log(props);
  }
}
