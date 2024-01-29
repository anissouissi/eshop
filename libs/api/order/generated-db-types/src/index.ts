import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';
import { ObjectType } from '@nestjs/graphql';
import { Directive } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/order';
import { Int } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum OrderStatus {
    PLACED = "PLACED",
    PAID = "PAID",
    UNDER_DELIVERY = "UNDER_DELIVERY",
    DELIVERED = "DELIVERED"
}

export enum OrderScalarFieldEnum {
    id = "id",
    status = "status",
    orderDate = "orderDate",
    paymentDate = "paymentDate",
    underDeliveryDate = "underDeliveryDate",
    delivedDate = "delivedDate"
}

registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
registerEnumType(OrderStatus, { name: 'OrderStatus', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })

@InputType()
export class AddressCreateEnvelopeInput {
    @Field(() => AddressCreateInput, {nullable:true})
    @Type(() => AddressCreateInput)
    set?: InstanceType<typeof AddressCreateInput>;
}

@InputType()
export class AddressCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    lastName!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    address1!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsOptional()
    @Validator.IsString()
    address2!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    city!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    country!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsOptional()
    @Validator.IsString()
    state!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    postalCode!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    phone!: string;
}

@InputType()
export class AddressOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address1?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    address2?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    postalCode?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;
}

@InputType()
export class AddressUpdateEnvelopeInput {
    @Field(() => AddressCreateInput, {nullable:true})
    @Type(() => AddressCreateInput)
    set?: InstanceType<typeof AddressCreateInput>;
    @Field(() => AddressUpdateInput, {nullable:true})
    @Type(() => AddressUpdateInput)
    update?: InstanceType<typeof AddressUpdateInput>;
}

@InputType()
export class AddressUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    firstName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    lastName?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    address1?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsString()
    address2?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    city?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    country?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsOptional()
    @Validator.IsString()
    state?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    postalCode?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    phone?: string;
}

@InputType()
export class AddressWhereInput {
    @Field(() => [AddressWhereInput], {nullable:true})
    AND?: Array<AddressWhereInput>;
    @Field(() => [AddressWhereInput], {nullable:true})
    OR?: Array<AddressWhereInput>;
    @Field(() => [AddressWhereInput], {nullable:true})
    NOT?: Array<AddressWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lastName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    address1?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    address2?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    city?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    country?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    state?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    postalCode?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    phone?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Address {
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:false})
    address1!: string;
    @Field(() => String, {nullable:false})
    address2!: string;
    @Field(() => String, {nullable:false})
    city!: string;
    @Field(() => String, {nullable:false})
    country!: string;
    @Field(() => String, {nullable:false})
    state!: string;
    @Field(() => String, {nullable:false})
    postalCode!: string;
    @Field(() => String, {nullable:false})
    phone!: string;
}

@InputType()
export class CustomerCreateEnvelopeInput {
    @Field(() => CustomerCreateInput, {nullable:true})
    @Type(() => CustomerCreateInput)
    set?: InstanceType<typeof CustomerCreateInput>;
}

@InputType()
export class CustomerCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    customerId!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
}

@InputType()
export class CustomerOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class CustomerUpdateEnvelopeInput {
    @Field(() => CustomerCreateInput, {nullable:true})
    @Type(() => CustomerCreateInput)
    set?: InstanceType<typeof CustomerCreateInput>;
    @Field(() => CustomerUpdateInput, {nullable:true})
    @Type(() => CustomerUpdateInput)
    update?: InstanceType<typeof CustomerUpdateInput>;
}

@InputType()
export class CustomerUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    customerId?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
}

@InputType()
export class CustomerWhereInput {
    @Field(() => [CustomerWhereInput], {nullable:true})
    AND?: Array<CustomerWhereInput>;
    @Field(() => [CustomerWhereInput], {nullable:true})
    OR?: Array<CustomerWhereInput>;
    @Field(() => [CustomerWhereInput], {nullable:true})
    NOT?: Array<CustomerWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    customerId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
}

@ObjectType({})
@Directive('@key(fields: "customerId")')
export class Customer {
    @Field(() => String, {nullable:false})
    customerId!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@ObjectType()
export class AggregateOrder {
    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregate>;
    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregate>;
    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregate>;
}

@ArgsType()
export class CreateManyOrderArgs {
    @Field(() => [OrderCreateManyInput], {nullable:false})
    @Type(() => OrderCreateManyInput)
    @ValidateNested()
    data!: Array<OrderCreateManyInput>;
}

@ArgsType()
export class CreateOneOrderArgs {
    @Field(() => OrderCreateInput, {nullable:false})
    @Type(() => OrderCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof OrderCreateInput>;
}

@ArgsType()
export class DeleteManyOrderArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof OrderWhereInput>;
}

@ArgsType()
export class DeleteOneOrderArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstOrderOrThrowArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}

@ArgsType()
export class FindFirstOrderArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}

@ArgsType()
export class FindManyOrderArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [OrderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueOrderOrThrowArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueOrderArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@ArgsType()
export class OrderAggregateArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithRelationInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => OrderCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    @Field(() => OrderMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    @Field(() => OrderMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}

@InputType()
export class OrderCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    orderDate?: true;
    @Field(() => Boolean, {nullable:true})
    paymentDate?: true;
    @Field(() => Boolean, {nullable:true})
    underDeliveryDate?: true;
    @Field(() => Boolean, {nullable:true})
    delivedDate?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class OrderCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    orderDate!: number;
    @Field(() => Int, {nullable:false})
    paymentDate!: number;
    @Field(() => Int, {nullable:false})
    underDeliveryDate!: number;
    @Field(() => Int, {nullable:false})
    delivedDate!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class OrderCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    paymentDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    underDeliveryDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    delivedDate?: keyof typeof SortOrder;
}

@InputType()
export class OrderCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => CustomerCreateEnvelopeInput, {nullable:false})
    customer!: InstanceType<typeof CustomerCreateEnvelopeInput>;
    @Field(() => [OrderItemCreateInput], {nullable:true})
    items?: Array<OrderItemCreateInput>;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    shippingAddress!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    billingAddress!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => PaymentCardCreateEnvelopeInput, {nullable:false})
    payment!: InstanceType<typeof PaymentCardCreateEnvelopeInput>;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:false})
    orderDate!: Date | string;
    @Field(() => Date, {nullable:false})
    paymentDate!: Date | string;
    @Field(() => Date, {nullable:false})
    underDeliveryDate!: Date | string;
    @Field(() => Date, {nullable:false})
    delivedDate!: Date | string;
}

@InputType()
export class OrderCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => CustomerCreateEnvelopeInput, {nullable:false})
    customer!: InstanceType<typeof CustomerCreateEnvelopeInput>;
    @Field(() => [OrderItemCreateInput], {nullable:true})
    items?: Array<OrderItemCreateInput>;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    shippingAddress!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    billingAddress!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => PaymentCardCreateEnvelopeInput, {nullable:false})
    payment!: InstanceType<typeof PaymentCardCreateEnvelopeInput>;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:false})
    orderDate!: Date | string;
    @Field(() => Date, {nullable:false})
    paymentDate!: Date | string;
    @Field(() => Date, {nullable:false})
    underDeliveryDate!: Date | string;
    @Field(() => Date, {nullable:false})
    delivedDate!: Date | string;
}

@ArgsType()
export class OrderGroupByArgs {
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof OrderWhereInput>;
    @Field(() => [OrderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OrderOrderByWithAggregationInput>;
    @Field(() => [OrderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrderScalarFieldEnum>;
    @Field(() => OrderScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof OrderScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => OrderCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregateInput>;
    @Field(() => OrderMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregateInput>;
    @Field(() => OrderMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregateInput>;
}

@ObjectType()
export class OrderGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:false})
    orderDate!: Date | string;
    @Field(() => Date, {nullable:false})
    paymentDate!: Date | string;
    @Field(() => Date, {nullable:false})
    underDeliveryDate!: Date | string;
    @Field(() => Date, {nullable:false})
    delivedDate!: Date | string;
    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: InstanceType<typeof OrderCountAggregate>;
    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: InstanceType<typeof OrderMinAggregate>;
    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof OrderMaxAggregate>;
}

@InputType()
export class OrderMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    orderDate?: true;
    @Field(() => Boolean, {nullable:true})
    paymentDate?: true;
    @Field(() => Boolean, {nullable:true})
    underDeliveryDate?: true;
    @Field(() => Boolean, {nullable:true})
    delivedDate?: true;
}

@ObjectType()
export class OrderMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    orderDate?: Date | string;
    @Field(() => Date, {nullable:true})
    paymentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    underDeliveryDate?: Date | string;
    @Field(() => Date, {nullable:true})
    delivedDate?: Date | string;
}

@InputType()
export class OrderMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    paymentDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    underDeliveryDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    delivedDate?: keyof typeof SortOrder;
}

@InputType()
export class OrderMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    orderDate?: true;
    @Field(() => Boolean, {nullable:true})
    paymentDate?: true;
    @Field(() => Boolean, {nullable:true})
    underDeliveryDate?: true;
    @Field(() => Boolean, {nullable:true})
    delivedDate?: true;
}

@ObjectType()
export class OrderMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    orderDate?: Date | string;
    @Field(() => Date, {nullable:true})
    paymentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    underDeliveryDate?: Date | string;
    @Field(() => Date, {nullable:true})
    delivedDate?: Date | string;
}

@InputType()
export class OrderMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    paymentDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    underDeliveryDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    delivedDate?: keyof typeof SortOrder;
}

@InputType()
export class OrderOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    paymentDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    underDeliveryDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    delivedDate?: keyof typeof SortOrder;
    @Field(() => OrderCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof OrderCountOrderByAggregateInput>;
    @Field(() => OrderMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof OrderMaxOrderByAggregateInput>;
    @Field(() => OrderMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof OrderMinOrderByAggregateInput>;
}

@InputType()
export class OrderOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => CustomerOrderByInput, {nullable:true})
    customer?: InstanceType<typeof CustomerOrderByInput>;
    @Field(() => OrderItemOrderByCompositeAggregateInput, {nullable:true})
    items?: InstanceType<typeof OrderItemOrderByCompositeAggregateInput>;
    @Field(() => AddressOrderByInput, {nullable:true})
    shippingAddress?: InstanceType<typeof AddressOrderByInput>;
    @Field(() => AddressOrderByInput, {nullable:true})
    billingAddress?: InstanceType<typeof AddressOrderByInput>;
    @Field(() => PaymentCardOrderByInput, {nullable:true})
    payment?: InstanceType<typeof PaymentCardOrderByInput>;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    orderDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    paymentDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    underDeliveryDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    delivedDate?: keyof typeof SortOrder;
}

@InputType()
export class OrderScalarWhereWithAggregatesInput {
    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderScalarWhereWithAggregatesInput>;
    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderScalarWhereWithAggregatesInput>;
    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumOrderStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    orderDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    paymentDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    underDeliveryDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    delivedDate?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class OrderUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => CustomerCreateEnvelopeInput, {nullable:false})
    customer!: InstanceType<typeof CustomerCreateEnvelopeInput>;
    @Field(() => [OrderItemCreateInput], {nullable:true})
    items?: Array<OrderItemCreateInput>;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    shippingAddress!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => AddressCreateEnvelopeInput, {nullable:false})
    billingAddress!: InstanceType<typeof AddressCreateEnvelopeInput>;
    @Field(() => PaymentCardCreateEnvelopeInput, {nullable:false})
    payment!: InstanceType<typeof PaymentCardCreateEnvelopeInput>;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:false})
    orderDate!: Date | string;
    @Field(() => Date, {nullable:false})
    paymentDate!: Date | string;
    @Field(() => Date, {nullable:false})
    underDeliveryDate!: Date | string;
    @Field(() => Date, {nullable:false})
    delivedDate!: Date | string;
}

@InputType()
export class OrderUncheckedUpdateManyInput {
    @Field(() => CustomerUpdateEnvelopeInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUpdateEnvelopeInput>;
    @Field(() => [OrderItemCreateInput], {nullable:true})
    items?: Array<OrderItemCreateInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    shippingAddress?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    billingAddress?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => PaymentCardUpdateEnvelopeInput, {nullable:true})
    payment?: InstanceType<typeof PaymentCardUpdateEnvelopeInput>;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    orderDate?: Date | string;
    @Field(() => Date, {nullable:true})
    paymentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    underDeliveryDate?: Date | string;
    @Field(() => Date, {nullable:true})
    delivedDate?: Date | string;
}

@InputType()
export class OrderUncheckedUpdateInput {
    @Field(() => CustomerUpdateEnvelopeInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUpdateEnvelopeInput>;
    @Field(() => [OrderItemCreateInput], {nullable:true})
    items?: Array<OrderItemCreateInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    shippingAddress?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    billingAddress?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => PaymentCardUpdateEnvelopeInput, {nullable:true})
    payment?: InstanceType<typeof PaymentCardUpdateEnvelopeInput>;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    orderDate?: Date | string;
    @Field(() => Date, {nullable:true})
    paymentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    underDeliveryDate?: Date | string;
    @Field(() => Date, {nullable:true})
    delivedDate?: Date | string;
}

@InputType()
export class OrderUpdateManyMutationInput {
    @Field(() => CustomerUpdateEnvelopeInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUpdateEnvelopeInput>;
    @Field(() => [OrderItemCreateInput], {nullable:true})
    items?: Array<OrderItemCreateInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    shippingAddress?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    billingAddress?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => PaymentCardUpdateEnvelopeInput, {nullable:true})
    payment?: InstanceType<typeof PaymentCardUpdateEnvelopeInput>;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    orderDate?: Date | string;
    @Field(() => Date, {nullable:true})
    paymentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    underDeliveryDate?: Date | string;
    @Field(() => Date, {nullable:true})
    delivedDate?: Date | string;
}

@InputType()
export class OrderUpdateInput {
    @Field(() => CustomerUpdateEnvelopeInput, {nullable:true})
    customer?: InstanceType<typeof CustomerUpdateEnvelopeInput>;
    @Field(() => [OrderItemCreateInput], {nullable:true})
    items?: Array<OrderItemCreateInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    shippingAddress?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => AddressUpdateEnvelopeInput, {nullable:true})
    billingAddress?: InstanceType<typeof AddressUpdateEnvelopeInput>;
    @Field(() => PaymentCardUpdateEnvelopeInput, {nullable:true})
    payment?: InstanceType<typeof PaymentCardUpdateEnvelopeInput>;
    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:true})
    orderDate?: Date | string;
    @Field(() => Date, {nullable:true})
    paymentDate?: Date | string;
    @Field(() => Date, {nullable:true})
    underDeliveryDate?: Date | string;
    @Field(() => Date, {nullable:true})
    delivedDate?: Date | string;
}

@InputType()
export class OrderWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;
    @Field(() => CustomerCompositeFilter, {nullable:true})
    customer?: InstanceType<typeof CustomerCompositeFilter>;
    @Field(() => [OrderItemObjectEqualityInput], {nullable:true})
    items?: Array<OrderItemObjectEqualityInput>;
    @Field(() => AddressCompositeFilter, {nullable:true})
    shippingAddress?: InstanceType<typeof AddressCompositeFilter>;
    @Field(() => AddressCompositeFilter, {nullable:true})
    billingAddress?: InstanceType<typeof AddressCompositeFilter>;
    @Field(() => PaymentCardCompositeFilter, {nullable:true})
    payment?: InstanceType<typeof PaymentCardCompositeFilter>;
    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    orderDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    paymentDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    underDeliveryDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    delivedDate?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class OrderWhereInput {
    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;
    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => CustomerCompositeFilter, {nullable:true})
    customer?: InstanceType<typeof CustomerCompositeFilter>;
    @Field(() => [OrderItemObjectEqualityInput], {nullable:true})
    items?: Array<OrderItemObjectEqualityInput>;
    @Field(() => AddressCompositeFilter, {nullable:true})
    shippingAddress?: InstanceType<typeof AddressCompositeFilter>;
    @Field(() => AddressCompositeFilter, {nullable:true})
    billingAddress?: InstanceType<typeof AddressCompositeFilter>;
    @Field(() => PaymentCardCompositeFilter, {nullable:true})
    payment?: InstanceType<typeof PaymentCardCompositeFilter>;
    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumOrderStatusFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    orderDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    paymentDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    underDeliveryDate?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    delivedDate?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType({})
@Directive('@key(fields: "id")')
export class Order {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Customer, {nullable:false})
    customer?: InstanceType<typeof Customer>;
    @Field(() => [OrderItem], {nullable:true})
    items?: Array<OrderItem>;
    @Field(() => Address, {nullable:false})
    shippingAddress?: InstanceType<typeof Address>;
    @Field(() => Address, {nullable:false})
    billingAddress?: InstanceType<typeof Address>;
    @Field(() => PaymentCard, {nullable:false})
    payment?: InstanceType<typeof PaymentCard>;
    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;
    @Field(() => Date, {nullable:false})
    orderDate!: Date;
    @Field(() => Date, {nullable:false})
    paymentDate!: Date;
    @Field(() => Date, {nullable:false})
    underDeliveryDate!: Date;
    @Field(() => Date, {nullable:false})
    delivedDate!: Date;
}

@ArgsType()
export class UpdateManyOrderArgs {
    @Field(() => OrderUpdateManyMutationInput, {nullable:false})
    @Type(() => OrderUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof OrderUpdateManyMutationInput>;
    @Field(() => OrderWhereInput, {nullable:true})
    @Type(() => OrderWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof OrderWhereInput>;
}

@ArgsType()
export class UpdateOneOrderArgs {
    @Field(() => OrderUpdateInput, {nullable:false})
    @Type(() => OrderUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof OrderUpdateInput>;
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneOrderArgs {
    @Field(() => OrderWhereUniqueInput, {nullable:false})
    @Type(() => OrderWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<OrderWhereUniqueInput, 'id'>;
    @Field(() => OrderCreateInput, {nullable:false})
    @Type(() => OrderCreateInput)
    create!: InstanceType<typeof OrderCreateInput>;
    @Field(() => OrderUpdateInput, {nullable:false})
    @Type(() => OrderUpdateInput)
    update!: InstanceType<typeof OrderUpdateInput>;
}

@InputType()
export class OrderItemCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    productId!: string;
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
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    thumbnail!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    category!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    quantity!: number;
}

@InputType()
export class OrderItemOrderByCompositeAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class OrderItemUpdateManyInput {
    @Field(() => OrderItemWhereInput, {nullable:false})
    @Type(() => OrderItemWhereInput)
    where!: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => OrderItemUpdateInput, {nullable:false})
    @Type(() => OrderItemUpdateInput)
    data!: InstanceType<typeof OrderItemUpdateInput>;
}

@InputType()
export class OrderItemUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    productId?: string;
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
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    thumbnail?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    category?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsNumber()
    quantity?: number;
}

@InputType()
export class OrderItemWhereInput {
    @Field(() => [OrderItemWhereInput], {nullable:true})
    AND?: Array<OrderItemWhereInput>;
    @Field(() => [OrderItemWhereInput], {nullable:true})
    OR?: Array<OrderItemWhereInput>;
    @Field(() => [OrderItemWhereInput], {nullable:true})
    NOT?: Array<OrderItemWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    productId?: InstanceType<typeof StringFilter>;
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
    @Field(() => StringFilter, {nullable:true})
    thumbnail?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    category?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    quantity?: InstanceType<typeof IntFilter>;
}

@ObjectType({})
@Directive('@key(fields: "productId")')
export class OrderItem {
    @Field(() => String, {nullable:false})
    productId!: string;
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
    @Field(() => String, {nullable:false})
    thumbnail!: string;
    @Field(() => String, {nullable:false})
    category!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
}

@InputType()
export class PaymentCardCreateEnvelopeInput {
    @Field(() => PaymentCardCreateInput, {nullable:true})
    @Type(() => PaymentCardCreateInput)
    set?: InstanceType<typeof PaymentCardCreateInput>;
}

@InputType()
export class PaymentCardCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    cardNumber!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    nameOnCard!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    expirationDate!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    cvc!: string;
}

@InputType()
export class PaymentCardOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    cardNumber?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    nameOnCard?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    cvc?: keyof typeof SortOrder;
}

@InputType()
export class PaymentCardUpdateEnvelopeInput {
    @Field(() => PaymentCardCreateInput, {nullable:true})
    @Type(() => PaymentCardCreateInput)
    set?: InstanceType<typeof PaymentCardCreateInput>;
    @Field(() => PaymentCardUpdateInput, {nullable:true})
    @Type(() => PaymentCardUpdateInput)
    update?: InstanceType<typeof PaymentCardUpdateInput>;
}

@InputType()
export class PaymentCardUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    cardNumber?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    nameOnCard?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    expirationDate?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    cvc?: string;
}

@InputType()
export class PaymentCardWhereInput {
    @Field(() => [PaymentCardWhereInput], {nullable:true})
    AND?: Array<PaymentCardWhereInput>;
    @Field(() => [PaymentCardWhereInput], {nullable:true})
    OR?: Array<PaymentCardWhereInput>;
    @Field(() => [PaymentCardWhereInput], {nullable:true})
    NOT?: Array<PaymentCardWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    cardNumber?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    nameOnCard?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    expirationDate?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    cvc?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class PaymentCard {
    @Field(() => String, {nullable:false})
    cardNumber!: string;
    @Field(() => String, {nullable:false})
    nameOnCard!: string;
    @Field(() => String, {nullable:false})
    expirationDate!: string;
    @Field(() => String, {nullable:false})
    cvc!: string;
}

@InputType()
export class AddressCompositeFilter {
    @Field(() => AddressObjectEqualityInput, {nullable:true})
    equals?: InstanceType<typeof AddressObjectEqualityInput>;
    @Field(() => AddressWhereInput, {nullable:true})
    is?: InstanceType<typeof AddressWhereInput>;
    @Field(() => AddressWhereInput, {nullable:true})
    isNot?: InstanceType<typeof AddressWhereInput>;
}

@InputType()
export class AddressObjectEqualityInput {
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => String, {nullable:false})
    address1!: string;
    @Field(() => String, {nullable:false})
    address2!: string;
    @Field(() => String, {nullable:false})
    city!: string;
    @Field(() => String, {nullable:false})
    country!: string;
    @Field(() => String, {nullable:false})
    state!: string;
    @Field(() => String, {nullable:false})
    postalCode!: string;
    @Field(() => String, {nullable:false})
    phone!: string;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@ArgsType()
export class AggregateOrderRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@InputType()
export class CustomerCompositeFilter {
    @Field(() => CustomerObjectEqualityInput, {nullable:true})
    equals?: InstanceType<typeof CustomerObjectEqualityInput>;
    @Field(() => CustomerWhereInput, {nullable:true})
    is?: InstanceType<typeof CustomerWhereInput>;
    @Field(() => CustomerWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CustomerWhereInput>;
}

@InputType()
export class CustomerObjectEqualityInput {
    @Field(() => String, {nullable:false})
    customerId!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class EnumOrderStatusFilter {
    @Field(() => OrderStatus, {nullable:true})
    equals?: keyof typeof OrderStatus;
    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<keyof typeof OrderStatus>;
    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<keyof typeof OrderStatus>;
    @Field(() => EnumOrderStatusFilter, {nullable:true})
    not?: InstanceType<typeof EnumOrderStatusFilter>;
}

@InputType()
export class EnumOrderStatusWithAggregatesFilter {
    @Field(() => OrderStatus, {nullable:true})
    equals?: keyof typeof OrderStatus;
    @Field(() => [OrderStatus], {nullable:true})
    in?: Array<keyof typeof OrderStatus>;
    @Field(() => [OrderStatus], {nullable:true})
    notIn?: Array<keyof typeof OrderStatus>;
    @Field(() => EnumOrderStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumOrderStatusWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumOrderStatusFilter, {nullable:true})
    _min?: InstanceType<typeof EnumOrderStatusFilter>;
    @Field(() => EnumOrderStatusFilter, {nullable:true})
    _max?: InstanceType<typeof EnumOrderStatusFilter>;
}

@ArgsType()
export class FindOrderRawArgs {
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
export class OrderItemCompositeListFilter {
    @Field(() => [OrderItemObjectEqualityInput], {nullable:true})
    equals?: Array<OrderItemObjectEqualityInput>;
    @Field(() => OrderItemWhereInput, {nullable:true})
    every?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => OrderItemWhereInput, {nullable:true})
    some?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => OrderItemWhereInput, {nullable:true})
    none?: InstanceType<typeof OrderItemWhereInput>;
    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}

@InputType()
export class OrderItemDeleteManyInput {
    @Field(() => OrderItemWhereInput, {nullable:false})
    @Type(() => OrderItemWhereInput)
    where!: InstanceType<typeof OrderItemWhereInput>;
}

@InputType()
export class OrderItemListCreateEnvelopeInput {
    @Field(() => [OrderItemCreateInput], {nullable:true})
    @Type(() => OrderItemCreateInput)
    set?: Array<OrderItemCreateInput>;
}

@InputType()
export class OrderItemListUpdateEnvelopeInput {
    @Field(() => [OrderItemCreateInput], {nullable:true})
    @Type(() => OrderItemCreateInput)
    set?: Array<OrderItemCreateInput>;
    @Field(() => [OrderItemCreateInput], {nullable:true})
    push?: Array<OrderItemCreateInput>;
    @Field(() => OrderItemUpdateManyInput, {nullable:true})
    @Type(() => OrderItemUpdateManyInput)
    updateMany?: InstanceType<typeof OrderItemUpdateManyInput>;
    @Field(() => OrderItemDeleteManyInput, {nullable:true})
    @Type(() => OrderItemDeleteManyInput)
    deleteMany?: InstanceType<typeof OrderItemDeleteManyInput>;
}

@InputType()
export class OrderItemObjectEqualityInput {
    @Field(() => String, {nullable:false})
    productId!: string;
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
    @Field(() => String, {nullable:false})
    thumbnail!: string;
    @Field(() => String, {nullable:false})
    category!: string;
    @Field(() => Int, {nullable:false})
    quantity!: number;
}

@InputType()
export class PaymentCardCompositeFilter {
    @Field(() => PaymentCardObjectEqualityInput, {nullable:true})
    equals?: InstanceType<typeof PaymentCardObjectEqualityInput>;
    @Field(() => PaymentCardWhereInput, {nullable:true})
    is?: InstanceType<typeof PaymentCardWhereInput>;
    @Field(() => PaymentCardWhereInput, {nullable:true})
    isNot?: InstanceType<typeof PaymentCardWhereInput>;
}

@InputType()
export class PaymentCardObjectEqualityInput {
    @Field(() => String, {nullable:false})
    cardNumber!: string;
    @Field(() => String, {nullable:false})
    nameOnCard!: string;
    @Field(() => String, {nullable:false})
    expirationDate!: string;
    @Field(() => String, {nullable:false})
    cvc!: string;
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
