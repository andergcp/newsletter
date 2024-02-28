import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetStatisticsResponse {
  @Field({ description: 'The quantity of emails delivered' })
  emailsDelivered: number;

  @Field({
    description: 'The quantity of recipients whose emails have been sent',
  })
  recipientsQuantity: number;
}
