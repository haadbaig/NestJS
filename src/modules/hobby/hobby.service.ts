/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Hobby, HobbyDocument } from "./hobby.schema";

@Injectable()
export class HobbyService {
  constructor(
    @InjectModel(Hobby.name, 'db1') private hobbyModel: Model<Hobby>,

  ) {}

  async getHobby() : Promise<HobbyDocument[]> {
    return this.hobbyModel.find({});
  }

  async create(name: string, duration: number) : Promise<HobbyDocument>{
    const u = await this.hobbyModel.create({name, duration});
    u.save();
    return u;
  }
}