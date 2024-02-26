import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UnsubscribeManyInput {
  @Field(() => [String])
  subscriptionIds: string[];
}
