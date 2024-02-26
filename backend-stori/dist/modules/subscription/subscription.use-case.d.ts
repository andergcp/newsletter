import { Subscription } from './subscription.entity';
import { SubscriptionProps } from './subscription.entity';
import { DatabaseServices } from '@core/interfaces';
import { UnsubscribeManyInput } from './dtos/subscription-request.dto';
export declare class SubscriptionUseCases {
    private readonly databaseServices;
    constructor(databaseServices: DatabaseServices);
    createSubscription(subscriptionProps: SubscriptionProps): Promise<Subscription>;
    findAllSubscriptions(filter?: Record<string, string | number>): Promise<Subscription[]>;
    unsubscribeMany({ subscriptionIds }: UnsubscribeManyInput): Promise<boolean>;
}
