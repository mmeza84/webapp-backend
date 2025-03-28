import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTrackableDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  maxCount: number;

  @IsNumber()
  currentCount: number;

  @IsNumber()
  characterId: number;
}
