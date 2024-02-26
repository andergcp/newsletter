import { Entity } from '@core/interfaces/entity.base';
export interface SubscriptionProps {
    email: string;
    newsletterId: string;
    status: SubscriptionStatus;
}
export declare enum SubscriptionStatus {
    SUBSCRIBED = "SUBSCRIBED",
    UNSUBSCRIBED = "UNSUBSCRIBED"
}
export declare class Subscription extends Entity<SubscriptionProps> {
    validateProps(props: SubscriptionProps): void;
}
