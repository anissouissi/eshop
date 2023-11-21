import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import {
  Product,
  CreateOneProductArgs,
  FindUniqueProductArgs,
  UpdateOneProductArgs,
  DeleteOneProductArgs,
} from '@aso/api-catalog-generated-db-types';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  createProduct(@Args() createOneProductArgs: CreateOneProductArgs) {
    return this.productService.create(createOneProductArgs);
  }

  @Query(() => [Product])
  findAll() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  findOne(@Args() findUniqueProductArgs: FindUniqueProductArgs) {
    return this.productService.findOne(findUniqueProductArgs);
  }

  @Mutation(() => Product)
  updateProduct(@Args() updateOneProductArgs: UpdateOneProductArgs) {
    return this.productService.update(updateOneProductArgs);
  }

  @Mutation(() => Product)
  removeProduct(@Args() deleteOneProductArgs: DeleteOneProductArgs) {
    return this.productService.remove(deleteOneProductArgs);
  }
}
