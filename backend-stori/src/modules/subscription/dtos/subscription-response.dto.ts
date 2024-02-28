import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

import { SubscriptionStatus } from '../subscription.entity';
import { NewsletterResponse } from '@modules/newsletter/dtos/newsletter-response.dto';

@ObjectType()
export class SubscriptionResponse {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field(() => NewsletterResponse)
  newsletter: NewsletterResponse;

  @Field(() => SubscriptionStatus)
  status: SubscriptionStatus;
}

registerEnumType(SubscriptionStatus, {
  name: 'SubscriptionStatus',
});
