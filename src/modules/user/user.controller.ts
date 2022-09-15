/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "./user.schema";
import { UsersService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get(':userid')
  async getUser (@Param('userid') id: string) : Promise<User>{
    return this.usersService.getUserById(id);
  }

  @Get('/')
  async getAllUsers(): Promise<User[]>{
    return this.usersService.getUsers();
  }

  @Post('/')
  async createUser (@Body() user: any): Promise<User> {
    // const add  = await this.addressService.createAdd(user.houseNo, user.country, user.city);
    return this.usersService.createUser(user.email, user.age);
  }

}