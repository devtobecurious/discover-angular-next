import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTravelDayDto } from './dto/create-travel-day.dto';
import { UpdateTravelDayDto } from './dto/update-travel-day.dto';
import { TravelDaysService } from './travel-days.service';

@Controller('travel-days')
export class TravelDaysController {
  constructor(private readonly travelDaysService: TravelDaysService) {}

  @Post()
  create(@Body() dto: CreateTravelDayDto) {
    return this.travelDaysService.create(dto);
  }

  @Get()
  findAll() {
    return this.travelDaysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelDaysService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTravelDayDto) {
    return this.travelDaysService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelDaysService.remove(id);
  }
}
