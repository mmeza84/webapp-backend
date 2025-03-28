import { Module } from '@nestjs/common';
import { TrackablesService } from './trackables.service';
import { TrackablesController } from './trackables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trackable } from './entities/trackable.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trackable])],
  controllers: [TrackablesController],
  providers: [TrackablesService],
})
export class TrackablesModule {}
