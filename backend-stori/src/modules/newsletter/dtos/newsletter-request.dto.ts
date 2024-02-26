import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { NewsletterStatus } from '../newsletter.entity';
import { IsArray, IsEmail, IsOptional, MinLength } from 'class-validator';

@InputType()
export class CreateNewsletterInput {
  @Field()
  fileUrl: string;

  @Field()
  @MinLength(3)
  name: string;

  @Field(() => [String])
  @IsEmail({}, { each: true })
  @IsArray()
  recipientsEmails: string[];

  @Field()
  @MinLength(5)
  subject: string;

  @Field({ nullable: true })
  @IsOptional()
  sendAt?: Date;
}

registerEnumType(NewsletterStatus, {
  name: 'NewsletterStatus',
});
