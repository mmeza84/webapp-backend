import { Test, TestingModule } from '@nestjs/testing';
import { TrackablesService } from './trackables.service';

describe('TrackablesService', () => {
  let service: TrackablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrackablesService],
    }).compile();

    service = module.get<TrackablesService>(TrackablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
