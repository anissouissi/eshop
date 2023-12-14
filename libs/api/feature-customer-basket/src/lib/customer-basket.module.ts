import { Module } from '@nestjs/common';
import { CustomerBasketService } from './customer-basket.service';
import { CustomerBasketResolver } from './customer-basket.resolver';
import { PrismaModule } from '@aso/api-basket-data-access-db';

@Module({
  providers: [CustomerBasketResolver, CustomerBasketService],
  imports: [PrismaModule],
})
export class CustomerBasketModule {}
