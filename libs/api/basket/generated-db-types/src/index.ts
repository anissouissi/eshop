import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/basket';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum CustomerBasketScalarFieldEnum {
    id = "id",
    customerId = "customerId"
}

registerEnumType(CustomerBasketScalarFieldEnum, { name: 'CustomerBasketScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })

@InputType()
export class BasketItemCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    productId!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    quantity!: number;
}

@InputType()
export class BasketItemOrderByCompositeAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class BasketItemUpdateManyInput {
    @Field(() => BasketItemWhereInput, {nullable:false})
    @Type(() => BasketItemWhereInput)
    where!: InstanceType<typeof BasketItemWhereInput>;
    @Field(() => BasketItemUpdateInput, {nullable:false})
    @Type(() => BasketItemUpdateInput)
    data!: InstanceType<typeof BasketItemUpdateInput>;
}

@InputType()
export class BasketItemUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    productId?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsNumber()
    quantity?: number;
}

@InputType()
export class BasketItemWhereInput {
    @Field(() => [BasketItemWhereInput], {nullable:true})
    AND?: Array<BasketItemWhereInput>;
    @Field(() => [BasketItemWhereInput], {nullable:true})
    OR?: Array<BasketItemWhereInput>;
    @Field(() => [BasketItemWhereInput], {nullable:true})
    NOT?: Array<BasketItemWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    quantity?: InstanceType<typeof IntFilter>;
}

@ObjectType()
export class BasketItem {
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
}

@ObjectType()
export class AggregateCustomerBasket {
    @Field(() => CustomerBasketCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CustomerBasketCountAggregate>;
    @Field(() => CustomerBasketMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CustomerBasketMinAggregate>;
    @Field(() => CustomerBasketMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CustomerBasketMaxAggregate>;
}

@ArgsType()
export class CreateManyCustomerBasketArgs {
    @Field(() => [CustomerBasketCreateManyInput], {nullable:false})
    @Type(() => CustomerBasketCreateManyInput)
    @ValidateNested()
    data!: Array<CustomerBasketCreateManyInput>;
}

@ArgsType()
export class CreateOneCustomerBasketArgs {
    @Field(() => CustomerBasketCreateInput, {nullable:false})
    @Type(() => CustomerBasketCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof CustomerBasketCreateInput>;
}

@ArgsType()
export class CustomerBasketAggregateArgs {
    @Field(() => CustomerBasketWhereInput, {nullable:true})
    @Type(() => CustomerBasketWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomerBasketWhereInput>;
    @Field(() => [CustomerBasketOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomerBasketOrderByWithRelationInput>;
    @Field(() => CustomerBasketWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CustomerBasketWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CustomerBasketCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CustomerBasketCountAggregateInput>;
    @Field(() => CustomerBasketMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CustomerBasketMinAggregateInput>;
    @Field(() => CustomerBasketMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CustomerBasketMaxAggregateInput>;
}

@InputType()
export class CustomerBasketCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    customerId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CustomerBasketCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    customerId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CustomerBasketCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;
}

@InputType()
export class CustomerBasketCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    customerId!: string;
    @Field(() => [BasketItemCreateInput], {nullable:true})
    items?: Array<BasketItemCreateInput>;
}

@InputType()
export class CustomerBasketCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    customerId!: string;
    @Field(() => [BasketItemCreateInput], {nullable:true})
    items?: Array<BasketItemCreateInput>;
}

@ArgsType()
export class CustomerBasketGroupByArgs {
    @Field(() => CustomerBasketWhereInput, {nullable:true})
    @Type(() => CustomerBasketWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomerBasketWhereInput>;
    @Field(() => [CustomerBasketOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CustomerBasketOrderByWithAggregationInput>;
    @Field(() => [CustomerBasketScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CustomerBasketScalarFieldEnum>;
    @Field(() => CustomerBasketScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CustomerBasketScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CustomerBasketCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CustomerBasketCountAggregateInput>;
    @Field(() => CustomerBasketMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CustomerBasketMinAggregateInput>;
    @Field(() => CustomerBasketMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CustomerBasketMaxAggregateInput>;
}

@ObjectType()
export class CustomerBasketGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    customerId!: string;
    @Field(() => CustomerBasketCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CustomerBasketCountAggregate>;
    @Field(() => CustomerBasketMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CustomerBasketMinAggregate>;
    @Field(() => CustomerBasketMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CustomerBasketMaxAggregate>;
}

@InputType()
export class CustomerBasketMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    customerId?: true;
}

@ObjectType()
export class CustomerBasketMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    customerId?: string;
}

@InputType()
export class CustomerBasketMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;
}

@InputType()
export class CustomerBasketMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    customerId?: true;
}

@ObjectType()
export class CustomerBasketMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    customerId?: string;
}

@InputType()
export class CustomerBasketMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;
}

@InputType()
export class CustomerBasketOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;
    @Field(() => CustomerBasketCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CustomerBasketCountOrderByAggregateInput>;
    @Field(() => CustomerBasketMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CustomerBasketMaxOrderByAggregateInput>;
    @Field(() => CustomerBasketMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CustomerBasketMinOrderByAggregateInput>;
}

@InputType()
export class CustomerBasketOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;
    @Field(() => BasketItemOrderByCompositeAggregateInput, {nullable:true})
    items?: InstanceType<typeof BasketItemOrderByCompositeAggregateInput>;
}

@InputType()
export class CustomerBasketScalarWhereWithAggregatesInput {
    @Field(() => [CustomerBasketScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CustomerBasketScalarWhereWithAggregatesInput>;
    @Field(() => [CustomerBasketScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CustomerBasketScalarWhereWithAggregatesInput>;
    @Field(() => [CustomerBasketScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CustomerBasketScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    customerId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class CustomerBasketUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    customerId!: string;
    @Field(() => [BasketItemCreateInput], {nullable:true})
    items?: Array<BasketItemCreateInput>;
}

@InputType()
export class CustomerBasketUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    customerId?: string;
    @Field(() => [BasketItemCreateInput], {nullable:true})
    items?: Array<BasketItemCreateInput>;
}

@InputType()
export class CustomerBasketUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    customerId?: string;
    @Field(() => [BasketItemCreateInput], {nullable:true})
    items?: Array<BasketItemCreateInput>;
}

@InputType()
export class CustomerBasketUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    customerId?: string;
    @Field(() => [BasketItemCreateInput], {nullable:true})
    items?: Array<BasketItemCreateInput>;
}

@InputType()
export class CustomerBasketUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    customerId?: string;
    @Field(() => [BasketItemCreateInput], {nullable:true})
    items?: Array<BasketItemCreateInput>;
}

@InputType()
export class CustomerBasketWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [CustomerBasketWhereInput], {nullable:true})
    AND?: Array<CustomerBasketWhereInput>;
    @Field(() => [CustomerBasketWhereInput], {nullable:true})
    OR?: Array<CustomerBasketWhereInput>;
    @Field(() => [CustomerBasketWhereInput], {nullable:true})
    NOT?: Array<CustomerBasketWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    customerId?: InstanceType<typeof StringFilter>;
    @Field(() => [BasketItemObjectEqualityInput], {nullable:true})
    items?: Array<BasketItemObjectEqualityInput>;
}

@InputType()
export class CustomerBasketWhereInput {
    @Field(() => [CustomerBasketWhereInput], {nullable:true})
    AND?: Array<CustomerBasketWhereInput>;
    @Field(() => [CustomerBasketWhereInput], {nullable:true})
    OR?: Array<CustomerBasketWhereInput>;
    @Field(() => [CustomerBasketWhereInput], {nullable:true})
    NOT?: Array<CustomerBasketWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    customerId?: InstanceType<typeof StringFilter>;
    @Field(() => [BasketItemObjectEqualityInput], {nullable:true})
    items?: Array<BasketItemObjectEqualityInput>;
}

@ObjectType()
export class CustomerBasket {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    customerId!: string;
    @Field(() => [BasketItem], {nullable:true})
    items?: Array<BasketItem>;
}

@ArgsType()
export class DeleteManyCustomerBasketArgs {
    @Field(() => CustomerBasketWhereInput, {nullable:true})
    @Type(() => CustomerBasketWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomerBasketWhereInput>;
}

@ArgsType()
export class DeleteOneCustomerBasketArgs {
    @Field(() => CustomerBasketWhereUniqueInput, {nullable:false})
    @Type(() => CustomerBasketWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CustomerBasketWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstCustomerBasketOrThrowArgs {
    @Field(() => CustomerBasketWhereInput, {nullable:true})
    @Type(() => CustomerBasketWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomerBasketWhereInput>;
    @Field(() => [CustomerBasketOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomerBasketOrderByWithRelationInput>;
    @Field(() => CustomerBasketWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CustomerBasketWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CustomerBasketScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomerBasketScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCustomerBasketArgs {
    @Field(() => CustomerBasketWhereInput, {nullable:true})
    @Type(() => CustomerBasketWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomerBasketWhereInput>;
    @Field(() => [CustomerBasketOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomerBasketOrderByWithRelationInput>;
    @Field(() => CustomerBasketWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CustomerBasketWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CustomerBasketScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomerBasketScalarFieldEnum>;
}

@ArgsType()
export class FindManyCustomerBasketArgs {
    @Field(() => CustomerBasketWhereInput, {nullable:true})
    @Type(() => CustomerBasketWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomerBasketWhereInput>;
    @Field(() => [CustomerBasketOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomerBasketOrderByWithRelationInput>;
    @Field(() => CustomerBasketWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CustomerBasketWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CustomerBasketScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomerBasketScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCustomerBasketOrThrowArgs {
    @Field(() => CustomerBasketWhereUniqueInput, {nullable:false})
    @Type(() => CustomerBasketWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CustomerBasketWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueCustomerBasketArgs {
    @Field(() => CustomerBasketWhereUniqueInput, {nullable:false})
    @Type(() => CustomerBasketWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CustomerBasketWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyCustomerBasketArgs {
    @Field(() => CustomerBasketUpdateManyMutationInput, {nullable:false})
    @Type(() => CustomerBasketUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof CustomerBasketUpdateManyMutationInput>;
    @Field(() => CustomerBasketWhereInput, {nullable:true})
    @Type(() => CustomerBasketWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomerBasketWhereInput>;
}

@ArgsType()
export class UpdateOneCustomerBasketArgs {
    @Field(() => CustomerBasketUpdateInput, {nullable:false})
    @Type(() => CustomerBasketUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof CustomerBasketUpdateInput>;
    @Field(() => CustomerBasketWhereUniqueInput, {nullable:false})
    @Type(() => CustomerBasketWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CustomerBasketWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneCustomerBasketArgs {
    @Field(() => CustomerBasketWhereUniqueInput, {nullable:false})
    @Type(() => CustomerBasketWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CustomerBasketWhereUniqueInput, 'id'>;
    @Field(() => CustomerBasketCreateInput, {nullable:false})
    @Type(() => CustomerBasketCreateInput)
    create!: InstanceType<typeof CustomerBasketCreateInput>;
    @Field(() => CustomerBasketUpdateInput, {nullable:false})
    @Type(() => CustomerBasketUpdateInput)
    update!: InstanceType<typeof CustomerBasketUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@ArgsType()
export class AggregateCustomerBasketRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@InputType()
export class BasketItemCompositeListFilter {
    @Field(() => [BasketItemObjectEqualityInput], {nullable:true})
    equals?: Array<BasketItemObjectEqualityInput>;
    @Field(() => BasketItemWhereInput, {nullable:true})
    every?: InstanceType<typeof BasketItemWhereInput>;
    @Field(() => BasketItemWhereInput, {nullable:true})
    some?: InstanceType<typeof BasketItemWhereInput>;
    @Field(() => BasketItemWhereInput, {nullable:true})
    none?: InstanceType<typeof BasketItemWhereInput>;
    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class BasketItemDeleteManyInput {
    @Field(() => BasketItemWhereInput, {nullable:false})
    @Type(() => BasketItemWhereInput)
    where!: InstanceType<typeof BasketItemWhereInput>;
}

@InputType()
export class BasketItemListCreateEnvelopeInput {
    @Field(() => [BasketItemCreateInput], {nullable:true})
    @Type(() => BasketItemCreateInput)
    set?: Array<BasketItemCreateInput>;
}

@InputType()
export class BasketItemListUpdateEnvelopeInput {
    @Field(() => [BasketItemCreateInput], {nullable:true})
    @Type(() => BasketItemCreateInput)
    set?: Array<BasketItemCreateInput>;
    @Field(() => [BasketItemCreateInput], {nullable:true})
    push?: Array<BasketItemCreateInput>;
    @Field(() => BasketItemUpdateManyInput, {nullable:true})
    @Type(() => BasketItemUpdateManyInput)
    updateMany?: InstanceType<typeof BasketItemUpdateManyInput>;
    @Field(() => BasketItemDeleteManyInput, {nullable:true})
    @Type(() => BasketItemDeleteManyInput)
    deleteMany?: InstanceType<typeof BasketItemDeleteManyInput>;
}

@InputType()
export class BasketItemObjectEqualityInput {
    @Field(() => String, {nullable:false})
    productId!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
}

@ArgsType()
export class FindCustomerBasketRawArgs {
    @Field(() => GraphQLJSON, {nullable:true})
    filter?: any;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
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
