import { Test, TestingModule } from '@nestjs/testing';
import { CustomerBasketService } from './customer-basket.service';

describe('CustomerBasketService', () => {
  let service: CustomerBasketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerBasketService],
    }).compile();

    service = module.get<CustomerBasketService>(CustomerBasketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
