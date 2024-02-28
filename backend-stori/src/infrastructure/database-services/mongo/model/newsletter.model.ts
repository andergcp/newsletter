import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { NewsletterStatus } from '@modules/newsletter/newsletter.entity';

export type NewsletterDocument = Newsletter & Document;

@Schema({ timestamps: true })
export class Newsletter {
  @Prop()
  fileUrl: string;

  @Prop()
  name: string;

  @Prop()
  recipientsEmails: string[];

  @Prop()
  subject: string;

  @Prop()
  sendAt?: Date;

  @Prop({ enum: NewsletterStatus })
  status?: NewsletterStatus;
}

export const NewsletterSchema = SchemaFactory.createForClass(Newsletter);
