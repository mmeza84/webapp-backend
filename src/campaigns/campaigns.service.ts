import { Injectable } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaign } from './entities/campaign.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>
  ) {}

  create(createCampaignDto: CreateCampaignDto) {
    const campaign = new Campaign();

    campaign.name = createCampaignDto.name;
    campaign.startDate = createCampaignDto.startDate;

    return this.campaignRepository.save(campaign);
  }

  findAll(): Promise<Campaign[]> {
    return this.campaignRepository.find();
  }

  findOne(id: number) {
    return this.campaignRepository.findOneBy({ id });
  }

  async update(id: number, updateCampaignDto: UpdateCampaignDto) {
    const campaignPromise = new Promise((resolve, reject) => {
      this.campaignRepository.findOneBy({ id }).then((campaign) => {
        if (!campaign) {
          reject('Campaign not found');
        }

        this.campaignRepository
          .save({
            ...campaign,
            ...updateCampaignDto,
          })
          .then((campaign) => {
            resolve(campaign);
          });
      });
    });

    return campaignPromise;
  }

  remove(id: number) {
    return this.campaignRepository.delete(id);
  }
}
