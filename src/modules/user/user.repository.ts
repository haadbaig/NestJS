/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { User, UserDocument } from "./user.schema";
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";

@Injectable()
export class UserRepository{
  constructor(
    @InjectModel(User.name, 'db1') private userModel: Model<UserDocument>,

  ){ }

  async findone(userfilter: FilterQuery<User>):Promise<User>{
    return this.userModel.findOne(userfilter)
  }

  async find(userfilter: FilterQuery<User>):Promise<User[]>{
    return this.userModel.find(userfilter).populate('tokens');
  }

  async create(user: User): Promise<User> {
    console.log(user)
    const u = await this.userModel.create({...user, tokens: []});
    u.save();
    return user;
  }
  
  async findOneAndUpdate(userfilter: FilterQuery<User>, user: Partial<User>): Promise<User> {
    return this.userModel.findOneAndUpdate(userfilter, user);
  }

  async deleteByEmail(email:string) : Promise<any> {
    console.log("deleteByEmail")
    return await this.userModel.deleteMany({email:email})
  }

}