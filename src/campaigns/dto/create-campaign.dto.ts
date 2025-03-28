import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  @IsOptional()
  startDate: Date;
}
