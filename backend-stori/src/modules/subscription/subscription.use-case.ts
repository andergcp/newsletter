import { Inject, Injectable } from '@nestjs/common';
import { Subscription } from './subscription.entity';
import { SubscriptionProps, SubscriptionStatus } from './subscription.entity';
import { DatabaseServices, DatabaseServicesSymbol } from '@core/interfaces';
import { UnsubscribeManyInput } from './dtos/subscription-request.dto';

@Injectable()
export class SubscriptionUseCases {
  constructor(
    @Inject(DatabaseServicesSymbol)
    private readonly databaseServices: DatabaseServices,
  ) {}

  createSubscription(
    subscriptionProps: SubscriptionProps,
  ): Promise<Subscription> {
    const subscription = new Subscription({ props: subscriptionProps });
    return this.databaseServices.subscriptions.create(subscription);
  }

  findAllSubscriptions(
    filter?: Record<string, string | number>,
  ): Promise<Subscription[]> {
    return this.databaseServices.subscriptions.findAll(filter);
  }

  unsubscribeMany({ subscriptionIds }: UnsubscribeManyInput): Promise<boolean> {
    subscriptionIds.map(async (id) => {
      const subscription =
        await this.databaseServices.subscriptions.findById(id);
      subscription.props.status = SubscriptionStatus.UNSUBSCRIBED;
      await this.databaseServices.subscriptions.update(id, subscription);
    });
    return Promise.resolve(true);
  }
}
