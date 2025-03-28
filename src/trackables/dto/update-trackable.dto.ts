import { PartialType } from '@nestjs/mapped-types';
import { CreateTrackableDto } from './create-trackable.dto';

export class UpdateTrackableDto extends PartialType(CreateTrackableDto) {}
