import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { SubscriptionStatus } from '../subscription.entity';

@ObjectType()
export class SubscriptionResponse {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  newsletterId: string;

  @Field(() => SubscriptionStatus)
  status: SubscriptionStatus;
}

registerEnumType(SubscriptionStatus, {
  name: 'SubscriptionStatus',
});
