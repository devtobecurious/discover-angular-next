import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TravelDaysController } from './travel-days.controller';
import { TravelDaysService } from './travel-days.service';
import { TravelDay, TravelDaySchema } from './schemas/travel-day.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TravelDay.name, schema: TravelDaySchema },
    ]),
  ],
  controllers: [TravelDaysController],
  providers: [TravelDaysService],
})
export class TravelDaysModule {}
