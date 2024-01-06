import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/catalog';
import * as Validator from 'class-validator';
import { ID } from '@nestjs/graphql';
import { Directive } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    brand = "brand",
    price = "price",
    discountPercentage = "discountPercentage",
    rating = "rating",
    thumbnail = "thumbnail",
    images = "images",
    category = "category",
    stock = "stock"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@ArgsType()
export class AggregateProductRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindProductRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _sum?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _min?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _max?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
}

@ArgsType()
export class RunCommandRawArgs {
    @Field(() => GraphQLJSON, {nullable:false})
    command!: any;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringListFilter {
    @Field(() => [String], {nullable:true})
    equals?: Array<string>;
    @Field(() => String, {nullable:true})
    has?: string;
    @Field(() => [String], {nullable:true})
    hasEvery?: Array<string>;
    @Field(() => [String], {nullable:true})
    hasSome?: Array<string>;
    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateProduct {
    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregate>;
    @Field(() => ProductAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregate>;
    @Field(() => ProductSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregate>;
    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregate>;
    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregate>;
}

@ArgsType()
export class CreateManyProductArgs {
    @Field(() => [ProductCreateManyInput], {nullable:false})
    @Type(() => ProductCreateManyInput)
    @ValidateNested()
    data!: Array<ProductCreateManyInput>;
}

@ArgsType()
export class CreateOneProductArgs {
    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductCreateInput>;
}

@ArgsType()
export class DeleteManyProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
}

@ArgsType()
export class DeleteOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstProductOrThrowArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}

@ArgsType()
export class FindManyProductArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProductScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProductScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProductOrThrowArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ProductAggregateArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithRelationInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregateInput>;
    @Field(() => ProductAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregateInput>;
    @Field(() => ProductSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregateInput>;
    @Field(() => ProductMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregateInput>;
    @Field(() => ProductMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregateInput>;
}

@InputType()
export class ProductAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPercentage?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
    @Field(() => Boolean, {nullable:true})
    stock?: true;
}

@ObjectType()
export class ProductAvgAggregate {
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    discountPercentage?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Float, {nullable:true})
    stock?: number;
}

@InputType()
export class ProductAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPercentage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
}

@InputType()
export class ProductCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    brand?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPercentage?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
    @Field(() => Boolean, {nullable:true})
    thumbnail?: true;
    @Field(() => Boolean, {nullable:true})
    images?: true;
    @Field(() => Boolean, {nullable:true})
    category?: true;
    @Field(() => Boolean, {nullable:true})
    stock?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProductCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    brand!: number;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:false})
    discountPercentage!: number;
    @Field(() => Int, {nullable:false})
    rating!: number;
    @Field(() => Int, {nullable:false})
    thumbnail!: number;
    @Field(() => Int, {nullable:false})
    images!: number;
    @Field(() => Int, {nullable:false})
    category!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    stock!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProductCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPercentage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    images?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
}

@InputType()
export class ProductCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    description!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    brand!: string;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.Min(1)
    price!: number;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    discountPercentage!: number;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    rating!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    thumbnail!: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    images?: Array<string>;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    category!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    stock!: number;
}

@InputType()
export class ProductCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    description!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    brand!: string;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.Min(1)
    price!: number;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    discountPercentage!: number;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    rating!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    thumbnail!: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    images?: Array<string>;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    category!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    stock!: number;
}

@InputType()
export class ProductCreateimagesInput {
    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}

@ArgsType()
export class ProductGroupByArgs {
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
    @Field(() => [ProductOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductOrderByWithAggregationInput>;
    @Field(() => [ProductScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProductScalarFieldEnum>;
    @Field(() => ProductScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProductScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProductCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregateInput>;
    @Field(() => ProductAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregateInput>;
    @Field(() => ProductSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregateInput>;
    @Field(() => ProductMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregateInput>;
    @Field(() => ProductMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregateInput>;
}

@ObjectType()
export class ProductGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    description!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    brand!: string;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.Min(1)
    price!: number;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    discountPercentage!: number;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    rating!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    thumbnail!: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    images?: Array<string>;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    category!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    stock!: number;
    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProductCountAggregate>;
    @Field(() => ProductAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgAggregate>;
    @Field(() => ProductSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProductSumAggregate>;
    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProductMinAggregate>;
    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProductMaxAggregate>;
}

@InputType()
export class ProductMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    brand?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPercentage?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
    @Field(() => Boolean, {nullable:true})
    thumbnail?: true;
    @Field(() => Boolean, {nullable:true})
    category?: true;
    @Field(() => Boolean, {nullable:true})
    stock?: true;
}

@ObjectType()
export class ProductMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    brand?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    discountPercentage?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    thumbnail?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    category?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsNumber()
    stock?: number;
}

@InputType()
export class ProductMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPercentage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
}

@InputType()
export class ProductMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    brand?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPercentage?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
    @Field(() => Boolean, {nullable:true})
    thumbnail?: true;
    @Field(() => Boolean, {nullable:true})
    category?: true;
    @Field(() => Boolean, {nullable:true})
    stock?: true;
}

@ObjectType()
export class ProductMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    brand?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    discountPercentage?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    thumbnail?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    category?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsNumber()
    stock?: number;
}

@InputType()
export class ProductMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPercentage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
}

@InputType()
export class ProductOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPercentage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    images?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
    @Field(() => ProductCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProductCountOrderByAggregateInput>;
    @Field(() => ProductAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProductAvgOrderByAggregateInput>;
    @Field(() => ProductMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProductMaxOrderByAggregateInput>;
    @Field(() => ProductMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProductMinOrderByAggregateInput>;
    @Field(() => ProductSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProductSumOrderByAggregateInput>;
}

@InputType()
export class ProductOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPercentage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    thumbnail?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    images?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
}

@InputType()
export class ProductScalarWhereWithAggregatesInput {
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => [ProductScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    brand?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    price?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    discountPercentage?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    rating?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    thumbnail?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringListFilter, {nullable:true})
    images?: InstanceType<typeof StringListFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    category?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stock?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class ProductSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    discountPercentage?: true;
    @Field(() => Boolean, {nullable:true})
    rating?: true;
    @Field(() => Boolean, {nullable:true})
    stock?: true;
}

@ObjectType()
export class ProductSumAggregate {
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    discountPercentage?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    rating?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsNumber()
    stock?: number;
}

@InputType()
export class ProductSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    discountPercentage?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;
}

@InputType()
export class ProductUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    description!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    brand!: string;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.Min(1)
    price!: number;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    discountPercentage!: number;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    rating!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    thumbnail!: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    images?: Array<string>;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    category!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    stock!: number;
}

@InputType()
export class ProductUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    brand?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    discountPercentage?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    thumbnail?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    images?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    category?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsNumber()
    stock?: number;
}

@InputType()
export class ProductUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    brand?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    discountPercentage?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    thumbnail?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    images?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    category?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsNumber()
    stock?: number;
}

@InputType()
export class ProductUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    brand?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    discountPercentage?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    thumbnail?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    images?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    category?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsNumber()
    stock?: number;
}

@InputType()
export class ProductUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    brand?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    discountPercentage?: number;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    rating?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    thumbnail?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    images?: Array<string>;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    category?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsNumber()
    stock?: number;
}

@InputType()
export class ProductUpdateimagesInput {
    @Field(() => [String], {nullable:true})
    set?: Array<string>;
    @Field(() => [String], {nullable:true})
    push?: Array<string>;
}

@InputType()
export class ProductWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    brand?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    price?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    discountPercentage?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    rating?: InstanceType<typeof FloatFilter>;
    @Field(() => StringFilter, {nullable:true})
    thumbnail?: InstanceType<typeof StringFilter>;
    @Field(() => StringListFilter, {nullable:true})
    images?: InstanceType<typeof StringListFilter>;
    @Field(() => StringFilter, {nullable:true})
    category?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    stock?: InstanceType<typeof IntFilter>;
}

@InputType()
export class ProductWhereInput {
    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;
    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    brand?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    price?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    discountPercentage?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    rating?: InstanceType<typeof FloatFilter>;
    @Field(() => StringFilter, {nullable:true})
    thumbnail?: InstanceType<typeof StringFilter>;
    @Field(() => StringListFilter, {nullable:true})
    images?: InstanceType<typeof StringListFilter>;
    @Field(() => StringFilter, {nullable:true})
    category?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    stock?: InstanceType<typeof IntFilter>;
}

@ObjectType({})
@Directive('@key(fields: "id")')
export class Product {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    brand!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => Float, {nullable:false})
    discountPercentage!: number;
    @Field(() => Float, {nullable:false})
    rating!: number;
    @Field(() => String, {nullable:false})
    thumbnail!: string;
    @Field(() => [String], {nullable:true})
    images!: Array<string>;
    @Field(() => String, {nullable:false})
    category!: string;
    @Field(() => Int, {nullable:false})
    stock!: number;
}

@ArgsType()
export class UpdateManyProductArgs {
    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductUpdateManyMutationInput>;
    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ProductWhereInput>;
}

@ArgsType()
export class UpdateOneProductArgs {
    @Field(() => ProductUpdateInput, {nullable:false})
    @Type(() => ProductUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ProductUpdateInput>;
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneProductArgs {
    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
    @Field(() => ProductCreateInput, {nullable:false})
    @Type(() => ProductCreateInput)
    create!: InstanceType<typeof ProductCreateInput>;
    @Field(() => ProductUpdateInput, {nullable:false})
    @Type(() => ProductUpdateInput)
    update!: InstanceType<typeof ProductUpdateInput>;
}
