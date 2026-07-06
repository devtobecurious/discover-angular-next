import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TravelDaysModule } from './travel-days/travel-days.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/fake-travel-db',
    ),
    TravelDaysModule,
  ],
})
export class AppModule {}
