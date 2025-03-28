import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './campaigns/entities/campaign.entity';
import { CharactersModule } from './characters/characters.module';
import { Character } from './characters/entities/character.entity';
import { TrackablesModule } from './trackables/trackables.module';
import { Trackable } from './trackables/entities/trackable.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AccountModule,
    CampaignsModule,
    CharactersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Campaign, Character, Trackable],
      synchronize: process.env.DB_SYNCRONIZE === 'true',
      logging: process.env.DB_LOGGING === 'true',
      ssl: {
        rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === 'true',
      },
    }),
    TrackablesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
