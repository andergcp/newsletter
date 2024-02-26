import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatisticDocument = Statistic & Document;

@Schema({ timestamps: true })
export class Statistic {
  @Prop()
  deliveredAt: Date;

  @Prop()
  recipients: number;
}

export const StatisticSchema = SchemaFactory.createForClass(Statistic);
