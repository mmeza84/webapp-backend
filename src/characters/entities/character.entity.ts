import { Campaign } from 'src/campaigns/entities/campaign.entity';
import { Trackable } from 'src/trackables/entities/trackable.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 125 })
  name: string;

  @Column({ type: 'varchar', length: 125 })
  class: string;

  @Column({ type: 'varchar', length: 125 })
  race: string;

  @Column({ type: 'int4', name: 'campaign_id' })
  campaignId: number;

  // @ManyToOne(() => Campaign, (campaign) => campaign.characters, { eager: true })
  // @JoinColumn({ name: 'campaign_id' })
  // campaign: Campaign;

  // @OneToMany(() => Trackable, (trackable) => trackable.characterId)
  // trackables: Trackable[];
}
