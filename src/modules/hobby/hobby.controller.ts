/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post } from "@nestjs/common";
import { HobbyDocument } from "./hobby.schema";
import { HobbyService } from "./hobby.service";

@Controller('hobby')
export class HobbyController {
  constructor(private readonly hobbyService: HobbyService) {}
  
  @Get('/')
  async getAllUsers(): Promise<HobbyDocument[]>{
    return this.hobbyService.getHobby();
  }
  
  @Post('/')
  async createHobby (@Body()body ): Promise<HobbyDocument> {
    return this.hobbyService.create(body.name, body.duration);
  }
  
}