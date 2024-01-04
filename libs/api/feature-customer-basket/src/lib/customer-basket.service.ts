import { PrismaService } from '@aso/api-basket-data-access-db';
import {
  CreateOneCustomerBasketArgs,
  FindUniqueCustomerBasketArgs,
  UpdateOneCustomerBasketArgs,
  DeleteOneCustomerBasketArgs,
  FindManyCustomerBasketArgs,
} from '@aso/api-basket-generated-db-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerBasketService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneCustomerBasketArgs: CreateOneCustomerBasketArgs) {
    return this.prisma.customerBasket.create(createOneCustomerBasketArgs);
  }

  findAll(findManyCustomerBasketArgs: FindManyCustomerBasketArgs) {
    return this.prisma.customerBasket.findMany(findManyCustomerBasketArgs);
  }

  countAll(findManyCustomerBasketArgs: FindManyCustomerBasketArgs) {
    return this.prisma.customerBasket.count({
      where: findManyCustomerBasketArgs.where,
    });
  }

  findOne(findUniqueCustomerBasketArgs: FindUniqueCustomerBasketArgs) {
    return this.prisma.customerBasket.findUnique(findUniqueCustomerBasketArgs);
  }

  update(updateOneCustomerBasketArgs: UpdateOneCustomerBasketArgs) {
    return this.prisma.customerBasket.update(updateOneCustomerBasketArgs);
  }

  remove(deleteOneCustomerBasketArgs: DeleteOneCustomerBasketArgs) {
    return this.prisma.customerBasket.delete(deleteOneCustomerBasketArgs);
  }

  forCustomer(id: string) {
    return this.prisma.customerBasket.findMany({
      where: { customerId: { equals: id } },
    });
  }
}
