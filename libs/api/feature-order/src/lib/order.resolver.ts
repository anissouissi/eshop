import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  GqlExecutionContext,
} from '@nestjs/graphql';
import { OrderService } from './order.service';
import {
  Order,
  CreateOneOrderArgs,
  FindUniqueOrderArgs,
  UpdateOneOrderArgs,
  DeleteOneOrderArgs,
  FindManyOrderArgs,
} from '@aso/api-order-generated-db-types';
import { ClientProxy } from '@nestjs/microservices';
import { Inject, UseGuards } from '@nestjs/common';
import { PAYMENT_SERVICE } from './services';
import { lastValueFrom } from 'rxjs';
import { JwtRmqAuthGuard } from '@aso/api-feature-identity';

@Resolver(() => Order)
export class OrderResolver {
  constructor(
    private readonly orderService: OrderService,
    @Inject(PAYMENT_SERVICE) private paymentClient: ClientProxy
  ) {}

  @Mutation(() => Order)
  @UseGuards(JwtRmqAuthGuard)
  async createOrder(
    @Args() createOneOrderArgs: CreateOneOrderArgs,
    @Context() context: any
  ) {
    const order = await this.orderService.create(createOneOrderArgs);
    await lastValueFrom(
      this.paymentClient.emit('order_placed', {
        payment: order.payment,
        Authentication: context.req.headers?.authentication,
      })
    );
    return order;
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
