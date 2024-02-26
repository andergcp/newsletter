import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetStatisticsResponse {
  @Field()
  emailsDelivered: number;

  @Field()
  recipientsQuantity: number;
}
