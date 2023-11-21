import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { PrismaModule } from '@aso/api-catalog-data-access-db';

@Module({
  providers: [ProductResolver, ProductService],
  imports: [PrismaModule],
})
export class ProductModule {}
