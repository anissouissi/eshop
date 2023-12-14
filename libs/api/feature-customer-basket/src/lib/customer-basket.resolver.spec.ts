import { Test, TestingModule } from '@nestjs/testing';
import { CustomerBasketResolver } from './customer-basket.resolver';
import { CustomerBasketService } from './customer-basket.service';

describe('CustomerBasketResolver', () => {
  let resolver: CustomerBasketResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerBasketResolver, CustomerBasketService],
    }).compile();

    resolver = module.get<CustomerBasketResolver>(CustomerBasketResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
