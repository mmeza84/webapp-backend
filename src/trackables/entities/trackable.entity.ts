import { Campaign } from 'src/campaigns/entities/campaign.entity';
import { Character } from 'src/characters/entities/character.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Trackable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 125 })
  name: string;

  @Column({ type: 'int4', name: 'max_count' })
  maxCount: number;

  @Column({ type: 'int4', name: 'current_count' })
  currentCount: number;

  @Column({ type: 'int4', name: 'character_id' })
  characterId: number;

  //   @ManyToOne(() => Character, (character) => character.trackables, {
  //     eager: true,
  //   })
  //   @JoinColumn({ name: 'character_id' })
  //   character: Campaign;
}
