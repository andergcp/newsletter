import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { SubscriptionStatus } from '@modules/subscription/subscription.entity';

export type SubscriptionDocument = Subscription & Document;

@Schema({ timestamps: true })
export class Subscription {
  @Prop()
  email: string;

  @Prop({ type: Types.ObjectId, ref: 'Newsletter' })
  newsletterId: Types.ObjectId;

  @Prop({ enum: SubscriptionStatus })
  status: SubscriptionStatus;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
