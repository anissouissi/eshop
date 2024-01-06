import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { BasketItem } from './basket-item';
import { ProductService } from './product.service';
import { Product } from '@aso/api-catalog-generated-db-types';

@Resolver(() => BasketItem)
export class BasketItemResolver {
  constructor(private readonly productService: ProductService) {}

  @ResolveField(() => Product)
  public product(@Parent() basketItem: BasketItem) {
    return this.productService.forBasketItem(basketItem.productId);
  }
}
