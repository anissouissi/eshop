import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomerBasketService } from './customer-basket.service';
import {
  CustomerBasket,
  CreateOneCustomerBasketArgs,
  FindUniqueCustomerBasketArgs,
  UpdateOneCustomerBasketArgs,
  DeleteOneCustomerBasketArgs,
  FindManyCustomerBasketArgs,
} from '@aso/api-basket-generated-db-types';

@Resolver(() => CustomerBasket)
export class CustomerBasketResolver {
  constructor(private readonly customerBasketService: CustomerBasketService) {}

  @Mutation(() => CustomerBasket)
  createCustomerBasket(
    @Args() createOneCustomerBasketArgs: CreateOneCustomerBasketArgs
  ) {
    return this.customerBasketService.create(createOneCustomerBasketArgs);
  }

  @Query(() => [CustomerBasket])
  findAllCustomerBaskets(
    @Args() findManyCustomerBasketArgs: FindManyCustomerBasketArgs
  ) {
    return this.customerBasketService.findAll(findManyCustomerBasketArgs);
  }

  @Query(() => Number)
  countAllCustomerBaskets(
    @Args() findManyCustomerBasketArgs: FindManyCustomerBasketArgs
  ) {
    return this.customerBasketService.countAll(findManyCustomerBasketArgs);
  }

  @Query(() => CustomerBasket)
  findOneCustomerBasket(
    @Args() findUniqueCustomerBasketArgs: FindUniqueCustomerBasketArgs
  ) {
    return this.customerBasketService.findOne(findUniqueCustomerBasketArgs);
  }

  @Mutation(() => CustomerBasket)
  updateCustomerBasket(
    @Args() updateOneCustomerBasketArgs: UpdateOneCustomerBasketArgs
  ) {
    return this.customerBasketService.update(updateOneCustomerBasketArgs);
  }

  @Mutation(() => CustomerBasket)
  removeCustomerBasket(
    @Args() deleteOneCustomerBasketArgs: DeleteOneCustomerBasketArgs
  ) {
    return this.customerBasketService.remove(deleteOneCustomerBasketArgs);
  }
}
