import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UnsubscribeManyInput {
  @Field(() => [String], {
    description: 'The subscription ids to be unsubscribed',
  })
  subscriptionIds: string[];
}
