import {
  IsArray,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class UpdateStepDto {
  @IsOptional()
  @IsString()
  place?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  peopleSeen?: string[];

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5)
  coolness?: number;
}

export class UpdateTravelDayDto {
  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateStepDto)
  steps?: UpdateStepDto[];
}
