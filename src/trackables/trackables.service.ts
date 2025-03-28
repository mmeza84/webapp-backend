import { Injectable } from '@nestjs/common';
import { CreateTrackableDto } from './dto/create-trackable.dto';
import { UpdateTrackableDto } from './dto/update-trackable.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Trackable } from './entities/trackable.entity';
import { resolve } from 'path';

@Injectable()
export class TrackablesService {
  constructor(
    @InjectRepository(Trackable)
    private readonly trackableRepository: Repository<Trackable>
  ) {}
  create(createTrackableDto: CreateTrackableDto) {
    const trackable = new Trackable();
    trackable.name = createTrackableDto.name;
    trackable.maxCount = createTrackableDto.maxCount;
    trackable.currentCount = createTrackableDto.currentCount;
    trackable.characterId = createTrackableDto.characterId;

    return this.trackableRepository.save(trackable);
  }

  findAll() {
    return this.trackableRepository.find();
  }

  findOne(id: number) {
    return this.trackableRepository.findOneBy({ id });
  }

  update(id: number, updateTrackableDto: UpdateTrackableDto) {
    const trackablePromise = new Promise((resolve, reject) => {
      this.trackableRepository.findOneBy({ id }).then((trackable) => {
        if (!trackable) {
          reject('Trackable not found');
        }

        this.trackableRepository
          .save({
            ...trackable,
            ...updateTrackableDto,
          })
          .then((trackable) => {
            resolve(trackable);
          });
      });
    });

    return trackablePromise;
  }

  remove(id: number) {
    return this.trackableRepository.delete(id);
  }
}
