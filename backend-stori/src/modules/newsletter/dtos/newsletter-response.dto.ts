import { Field, ObjectType } from '@nestjs/graphql';
import { NewsletterStatus } from "../newsletter.entity";

@ObjectType()
export class NewsletterResponse {
  @Field()
  id: string;

  @Field()
  fileUrl: string;

  @Field()
  name: string;

  @Field(() => [String])
  recipientsEmails: string[];

  @Field()
  subject: string;

  @Field({ nullable: true })
  sendAt?: Date;

  @Field(() => NewsletterStatus, { nullable: true })
  status?: NewsletterStatus;
}
