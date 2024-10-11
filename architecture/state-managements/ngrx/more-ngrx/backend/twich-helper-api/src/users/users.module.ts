import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule { }
