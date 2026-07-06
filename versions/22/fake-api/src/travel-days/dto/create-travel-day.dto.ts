import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsInt,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateStepDto {
  @IsString()
  place!: string;

  @IsArray()
  @IsString({ each: true })
  peopleSeen!: string[];

  @IsInt()
  @Min(0)
  @Max(5)
  coolness!: number;
}

export class CreateTravelDayDto {
  @IsDateString()
  date!: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateStepDto)
  steps!: CreateStepDto[];
}
