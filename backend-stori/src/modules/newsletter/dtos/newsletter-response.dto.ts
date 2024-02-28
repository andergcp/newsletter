import { Field, ObjectType } from '@nestjs/graphql';
import { NewsletterStatus } from '../newsletter.entity';

@ObjectType()
export class NewsletterResponse {
  @Field({ description: 'The id of the newsletter' })
  id: string;

  @Field({ description: 'The file url to be sent in the newsletter' })
  fileUrl: string;

  @Field({ description: 'The name of the newsletter' })
  name: string;

  @Field(() => [String], { description: 'The emails list of the recipients' })
  recipientsEmails: string[];

  @Field({ description: 'The subject of the newsletter' })
  subject: string;

  @Field({ nullable: true, description: 'The date to send the newsletter' })
  sendAt?: Date;

  @Field(() => NewsletterStatus, {
    nullable: true,
    description: 'The status of the newsletter',
  })
  status?: NewsletterStatus;
}
