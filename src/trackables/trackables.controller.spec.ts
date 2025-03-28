import { Test, TestingModule } from '@nestjs/testing';
import { TrackablesController } from './trackables.controller';
import { TrackablesService } from './trackables.service';

describe('TrackablesController', () => {
  let controller: TrackablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrackablesController],
      providers: [TrackablesService],
    }).compile();

    controller = module.get<TrackablesController>(TrackablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
