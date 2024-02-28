import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { IsArray, IsEmail, IsOptional, MinLength } from 'class-validator';

import { NewsletterStatus } from '../newsletter.entity';

@InputType()
export class CreateNewsletterInput {
  @Field({ description: 'The file url to be sent in the newsletter' })
  fileUrl: string;

  @Field({ description: 'The name of the newsletter' })
  @MinLength(3)
  name: string;

  @Field(() => [String], { description: 'The emails list of the recipients' })
  @IsEmail({}, { each: true })
  @IsArray()
  recipientsEmails: string[];

  @Field({ description: 'The subject of the newsletter' })
  @MinLength(5)
  subject: string;

  @Field({ nullable: true, description: 'The date to send the newsletter' })
  @IsOptional()
  sendAt?: Date;
}

registerEnumType(NewsletterStatus, {
  name: 'NewsletterStatus',
});
