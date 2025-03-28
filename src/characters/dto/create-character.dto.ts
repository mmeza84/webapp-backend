import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  race: string;

  @IsString()
  @IsNotEmpty()
  class: string;

  @IsNumber()
  campaignId: number;
}
