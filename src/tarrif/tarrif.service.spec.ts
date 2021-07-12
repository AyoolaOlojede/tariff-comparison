import { Test, TestingModule } from '@nestjs/testing';
import { TarrifService } from './tarrif.service';

describe('TarrifService', () => {
  let service: TarrifService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TarrifService],
    }).compile();

    service = module.get<TarrifService>(TarrifService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
