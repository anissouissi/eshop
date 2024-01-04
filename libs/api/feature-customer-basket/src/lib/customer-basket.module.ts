import { Module } from '@nestjs/common';
import { CustomerBasketService } from './customer-basket.service';
import { CustomerBasketResolver } from './customer-basket.resolver';
import { PrismaModule } from '@aso/api-basket-data-access-db';
import { UserResolver } from './user.resolver';

@Module({
  providers: [CustomerBasketResolver, CustomerBasketService, UserResolver],
  imports: [PrismaModule],
})
export class CustomerBasketModule {}
