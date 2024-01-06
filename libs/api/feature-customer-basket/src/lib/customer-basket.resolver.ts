import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  ResolveReference,
} from '@nestjs/graphql';
import { CustomerBasketService } from './customer-basket.service';
import {
  CreateOneCustomerBasketArgs,
  FindUniqueCustomerBasketArgs,
  UpdateOneCustomerBasketArgs,
  DeleteOneCustomerBasketArgs,
  FindManyCustomerBasketArgs,
  CustomerBasket,
} from '@aso/api-basket-generated-db-types';
import { User } from './user';

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

  @ResolveField(() => User)
  user(@Parent() customerBasket: CustomerBasket) {
    return { __typename: 'User', id: customerBasket.customerId };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.customerBasketService.findOne({ where: { id: reference.id } });
  }
}
