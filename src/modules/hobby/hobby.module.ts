/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HobbyController } from './hobby.controller';
import { Hobby, HobbySchema } from './hobby.schema';
import { HobbyService } from './hobby.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
    name: Hobby.name, 
    schema: HobbySchema,
    }],' db1'),
  ],
  controllers: [HobbyController],
  providers: [HobbyService],
})
export class HobbyModule {}
