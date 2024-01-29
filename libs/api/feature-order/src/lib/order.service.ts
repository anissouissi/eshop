import { PrismaService } from '@aso/api-order-data-access-db';
import {
  CreateOneOrderArgs,
  FindUniqueOrderArgs,
  UpdateOneOrderArgs,
  DeleteOneOrderArgs,
  FindManyOrderArgs,
} from '@aso/api-order-generated-db-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneOrderArgs: CreateOneOrderArgs) {
    return this.prisma.order.create(createOneOrderArgs);
  }

  findAll(findManyOrderArgs: FindManyOrderArgs) {
    return this.prisma.order.findMany(findManyOrderArgs);
  }

  countAll(findManyOrderArgs: FindManyOrderArgs) {
    return this.prisma.order.count({ where: findManyOrderArgs.where });
  }

  findOne(findUniqueOrderArgs: FindUniqueOrderArgs) {
    return this.prisma.order.findUnique(findUniqueOrderArgs);
  }

  update(updateOneOrderArgs: UpdateOneOrderArgs) {
    return this.prisma.order.update(updateOneOrderArgs);
  }

  remove(deleteOneOrderArgs: DeleteOneOrderArgs) {
    return this.prisma.order.delete(deleteOneOrderArgs);
  }
}
