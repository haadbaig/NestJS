/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';
// import {Address } from '../address/address.schema';
import { Hobby } from '../hobby/hobby.schema';


export type UserDocument = User & Document;

@Schema({
})
export class User {

  @Prop()
  email: string;

  @Prop()
  age: number;

  // @Prop({type: Types.ObjectId, ref: () => Address, refPath: 'db2'})
  // address: Address

  // @Prop(})
  hobby: Hobby[]

}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({email: 1, hobby: 1}, {unique: true})