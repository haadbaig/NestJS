/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './modules/user/user.controller';
import { UsersService } from './modules/user/user.service';
import { UserSchema } from './modules/user/user.schema';
import { HobbyService } from './modules/hobby/hobby.service';
import { HobbyController } from './modules/hobby/hobby.controller';
import { HobbySchema } from './modules/hobby/hobby.schema';

@Module({
  imports: [    
    MongooseModule.forRoot(
      'mongodb://localhost/db1',
      {connectionName: 'db1'}
    ),
    MongooseModule.forRoot(
      'mongodb://localhost/db2',
      {connectionName: 'db2'}
    ),

    // MongooseModule.forFeature([
    //   {
    //     name: 'Address',
    //     schema: AddressSchema,
    //    }
    // ],'db2'),

    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ],'db1'),

    MongooseModule.forFeature([
      {
        name: 'Hobby',
        schema: HobbySchema,
      },
    ],'db1'),

  ],
  controllers: [UserController, HobbyController],
  providers: [UsersService, HobbyService]
})
export class AppModule {}
