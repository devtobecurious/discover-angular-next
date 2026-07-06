import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type TravelDayDocument = HydratedDocument<TravelDay>;

@Schema({ _id: false })
export class Step {
  @Prop({ required: true, trim: true })
  place!: string;

  @Prop({ type: [String], default: [] })
  peopleSeen!: string[];

  @Prop({ required: true, min: 0, max: 5 })
  coolness!: number;
}

export const StepSchema = SchemaFactory.createForClass(Step);

@Schema({ timestamps: true })
export class TravelDay {
  _id!: Types.ObjectId;

  @Prop({ required: true })
  date!: Date;

  @Prop({ type: [StepSchema], default: [] })
  steps!: Step[];
}

export const TravelDaySchema = SchemaFactory.createForClass(TravelDay);
