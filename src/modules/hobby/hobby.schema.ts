/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HobbyDocument = Hobby & Document;

@Schema()
export class Hobby {
  @Prop({unique: true})
  name: string;

  @Prop()
  duration: number;
}

export const HobbySchema = SchemaFactory.createForClass(Hobby);