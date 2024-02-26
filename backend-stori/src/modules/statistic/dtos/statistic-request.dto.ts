import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStatisticInput {
  @Field()
  deliveredAt: Date;

  @Field()
  recipientsQuantity: number;
}
