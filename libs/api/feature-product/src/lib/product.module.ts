import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { PrismaModule } from '@aso/api-catalog-data-access-db';
import { BasketItemResolver } from './basket-item.resolver';

@Module({
  providers: [ProductResolver, ProductService, BasketItemResolver],
  imports: [PrismaModule],
})
export class ProductModule {}
