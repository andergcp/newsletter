import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubscriptionUseCases } from './subscription.use-case';
import { UnsubscribeManyInput } from './dtos/subscription-request.dto';
import { SubscriptionResponse } from './dtos/subscription-response.dto';

@Resolver()
export class SubscriptionResolver {
  constructor(private subscriptionUseCases: SubscriptionUseCases) {}

  @Mutation(() => Boolean)
  async unsubscribeMany(
    @Args('unsubscribeManyInput') unsubscribeManyInput: UnsubscribeManyInput,
  ): Promise<boolean> {
    return this.subscriptionUseCases.unsubscribeMany(unsubscribeManyInput);
  }

  @Query(() => SubscriptionResponse)
  async findSubscriptionsByEmail(
    @Args('email') email: string,
  ): Promise<SubscriptionResponse[]> {
    const entities = await this.subscriptionUseCases.findAllSubscriptions({
      email,
    });
    return entities.length
      ? entities.map((entity) => ({
          id: entity.id,
          ...entity.props,
        }))
      : [];
  }
}
