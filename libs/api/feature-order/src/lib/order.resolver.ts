import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from './order.service';
import {
  Order,
  CreateOneOrderArgs,
  FindUniqueOrderArgs,
  UpdateOneOrderArgs,
  DeleteOneOrderArgs,
  FindManyOrderArgs,
} from '@aso/api-order-generated-db-types';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order)
  createOrder(@Args() createOneOrderArgs: CreateOneOrderArgs) {
    return this.orderService.create(createOneOrderArgs);
  }

  @Query(() => [Order])
  findAllOrders(@Args() findManyOrderArgs: FindManyOrderArgs) {
    return this.orderService.findAll(findManyOrderArgs);
  }

  @Query(() => Number)
  countAllOrders(@Args() findManyOrderArgs: FindManyOrderArgs) {
    return this.orderService.countAll(findManyOrderArgs);
  }

  @Query(() => Order)
  findOneOrder(@Args() findUniqueOrderArgs: FindUniqueOrderArgs) {
    return this.orderService.findOne(findUniqueOrderArgs);
  }

  @Mutation(() => Order)
  updateOrder(@Args() updateOneOrderArgs: UpdateOneOrderArgs) {
    return this.orderService.update(updateOneOrderArgs);
  }

  @Mutation(() => Order)
  removeOrder(@Args() deleteOneOrderArgs: DeleteOneOrderArgs) {
    return this.orderService.remove(deleteOneOrderArgs);
  }
}
