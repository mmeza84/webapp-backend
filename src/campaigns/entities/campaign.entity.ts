import { Character } from 'src/characters/entities/character.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 125 })
  name: string;

  @Column({ type: 'date', name: 'start_date' })
  startDate: Date;

  // @OneToMany(() => Character, (character) => character.campaignId)
  // characters: Character[];
}
