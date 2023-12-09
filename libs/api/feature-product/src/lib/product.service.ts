import { PrismaService } from '@aso/api-catalog-data-access-db';
import {
  CreateOneProductArgs,
  FindUniqueProductArgs,
  UpdateOneProductArgs,
  DeleteOneProductArgs,
  FindManyProductArgs,
} from '@aso/api-catalog-generated-db-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneProductArgs: CreateOneProductArgs) {
    return this.prisma.product.create(createOneProductArgs);
  }

  findAll(findManyProductArgs: FindManyProductArgs) {
    return this.prisma.product.findMany(findManyProductArgs);
  }

  countAll(findManyProductArgs: FindManyProductArgs) {
    return this.prisma.product.count({ where: findManyProductArgs.where });
  }

  findOne(findUniqueProductArgs: FindUniqueProductArgs) {
    return this.prisma.product.findUnique(findUniqueProductArgs);
  }

  update(updateOneProductArgs: UpdateOneProductArgs) {
    return this.prisma.product.update(updateOneProductArgs);
  }

  remove(deleteOneProductArgs: DeleteOneProductArgs) {
    return this.prisma.product.delete(deleteOneProductArgs);
  }
}
