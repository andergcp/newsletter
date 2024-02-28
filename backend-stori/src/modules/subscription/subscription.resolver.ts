import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubscriptionUseCases } from './subscription.use-case';
import { UnsubscribeManyInput } from './dtos/subscription-request.dto';
import { SubscriptionResponse } from './dtos/subscription-response.dto';
import { NewsletterUseCases } from '@modules/newsletter/newsletter.use-case';

@Resolver()
export class SubscriptionResolver {
  constructor(
    private readonly newsletterUseCases: NewsletterUseCases,
    private readonly subscriptionUseCases: SubscriptionUseCases,
  ) {}

  @Mutation(() => Boolean)
  async unsubscribeMany(
    @Args('unsubscribeManyInput') unsubscribeManyInput: UnsubscribeManyInput,
  ): Promise<boolean> {
    return this.subscriptionUseCases.unsubscribeMany(unsubscribeManyInput);
  }

  @Query(() => [SubscriptionResponse])
  async findSubscriptionsByEmail(
    @Args('email') email: string,
  ): Promise<SubscriptionResponse[]> {
    const entities = await this.subscriptionUseCases.findAllSubscriptions({
      email,
    });
    const response: SubscriptionResponse[] = await Promise.all(
      entities.map(async (entity) => {
        const newsletter = await this.newsletterUseCases.findNewsletterById(
          entity.props.newsletterId,
        );
        return {
          id: entity.id,
          email: entity.props.email,
          newsletter: {
            id: newsletter.id,
            subject: newsletter.props.subject,
            status: newsletter.status,
            fileUrl: newsletter.props.fileUrl,
            name: newsletter.props.name,
            recipientsEmails: newsletter.props.recipientsEmails,
          },
          status: entity.props.status,
        };
      }),
    );
    return response;
  }
}
