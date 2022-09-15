/* eslint-disable prettier/prettier */
import { User, UserDocument } from "./user.schema";

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { HobbyService } from "../hobby/hobby.service";

// import { UpdateUserDto } from "./DTOs/update-user.dto";
// import { Token } from "src/token/token.schema";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name, 'db1') private userModel: Model<UserDocument>,
        private readonly hobbyService: HobbyService

    ) {}

    async getUserById(userId: string): Promise<any> {
        return this.userModel.findOne({_id: userId})

    }

    async getUsers(): Promise<User[]> {
        return this.userModel.find({}).populate('address');

    }

    async createUser(email: string, age: number/*, address: AddressDocument*/): Promise<User> {
        const hobby = await (await this.hobbyService.getHobby()).slice(2,3);
        console.log(hobby)
        const u = await this.userModel.create({
                email,
                age,
                // address,
                hobby
            });
        u.save();
        return u;
    }
}