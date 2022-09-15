/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { AddressModule } from '../address/address.module';
// import { AddressService } from '../address/address.service';
import { HobbyModule } from '../hobby/hobby.module';
// import { HobbyService } from '../hobby/hobby.service';
import { UserController } from './user.controller';
// import { UserRepository } from './user.repository';
import { User, UserSchema } from './user.schema';
import { UsersService } from './user.service';

@Module({
  imports: [
    HobbyModule,
    MongooseModule.forFeature([{
    name: User.name, 
    schema: UserSchema,
    }]),
  ],
  controllers: [UserController],
  providers: [UsersService],

})
export class UserModule {}
