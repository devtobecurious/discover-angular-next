import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTravelDayDto } from './dto/create-travel-day.dto';
import { UpdateTravelDayDto } from './dto/update-travel-day.dto';
import { TravelDay, TravelDayDocument } from './schemas/travel-day.schema';

@Injectable()
export class TravelDaysService {
  constructor(
    @InjectModel(TravelDay.name)
    private readonly travelDayModel: Model<TravelDayDocument>,
  ) {}

  create(dto: CreateTravelDayDto) {
    return this.travelDayModel.create({
      date: new Date(dto.date),
      steps: dto.steps,
    });
  }

  findAll() {
    return this.travelDayModel.find().sort({ date: -1 }).exec();
  }

  async findOne(id: string) {
    const day = await this.travelDayModel.findById(id).exec();
    if (!day) {
      throw new NotFoundException(`Travel day ${id} not found`);
    }

    return day;
  }

  async update(id: string, dto: UpdateTravelDayDto) {
    const payload: { date?: Date; steps?: UpdateTravelDayDto['steps'] } = {};

    if (dto.date) {
      payload.date = new Date(dto.date);
    }

    if (dto.steps) {
      payload.steps = dto.steps;
    }

    const updated = await this.travelDayModel
      .findByIdAndUpdate(id, payload, { new: true, runValidators: true })
      .exec();

    if (!updated) {
      throw new NotFoundException(`Travel day ${id} not found`);
    }

    return updated;
  }

  async remove(id: string) {
    const deleted = await this.travelDayModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(`Travel day ${id} not found`);
    }

    return { deleted: true };
  }
}
