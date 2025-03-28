import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrackablesService } from './trackables.service';
import { CreateTrackableDto } from './dto/create-trackable.dto';
import { UpdateTrackableDto } from './dto/update-trackable.dto';

@Controller('trackables')
export class TrackablesController {
  constructor(private readonly trackablesService: TrackablesService) {}

  @Post()
  create(@Body() createTrackableDto: CreateTrackableDto) {
    return this.trackablesService.create(createTrackableDto);
  }

  @Get()
  findAll() {
    return this.trackablesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trackablesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrackableDto: UpdateTrackableDto) {
    return this.trackablesService.update(+id, updateTrackableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trackablesService.remove(+id);
  }
}
