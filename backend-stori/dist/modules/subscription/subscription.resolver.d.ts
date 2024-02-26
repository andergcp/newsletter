import { SubscriptionUseCases } from './subscription.use-case';
import { UnsubscribeManyInput } from './dtos/subscription-request.dto';
import { SubscriptionResponse } from './dtos/subscription-response.dto';
export declare class SubscriptionResolver {
    private subscriptionUseCases;
    constructor(subscriptionUseCases: SubscriptionUseCases);
    unsubscribeMany(unsubscribeManyInput: UnsubscribeManyInput): Promise<boolean>;
    findSubscriptionsByEmail(email: string): Promise<SubscriptionResponse[]>;
}
