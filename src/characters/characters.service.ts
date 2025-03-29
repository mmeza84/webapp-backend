import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private readonly characterRepository: Repository<Character>
  ) {}

  create(createCharacterDto: CreateCharacterDto) {
    const character = new Character();

    character.name = createCharacterDto.name;
    character.race = createCharacterDto.race;
    character.class = createCharacterDto.class;
    character.campaignId = createCharacterDto.campaignId;

    return this.characterRepository.save(character);
  }

  findAll(campaignId?: number) {
    if (campaignId) {
      return this.characterRepository.findBy({ campaignId });
    }

    return this.characterRepository.find();
  }

  findOne(id: number) {
    return this.characterRepository.findOneBy({ id });
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto) {
    const characterPromise = new Promise((resolve, reject) => {
      this.characterRepository.findOneBy({ id }).then((character) => {
        if (!character) {
          reject('Character not found');
        }

        this.characterRepository
          .save({
            ...character,
            ...updateCharacterDto,
          })
          .then((character) => {
            resolve(character);
          });
      });
    });

    return characterPromise;
  }

  remove(id: number) {
    return this.characterRepository.delete(id);
  }
}
