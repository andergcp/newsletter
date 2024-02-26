import { SubscriptionStatus } from '../subscription.entity';
export declare class SubscriptionResponse {
    id: string;
    email: string;
    newsletterId: string;
    status: SubscriptionStatus;
}
