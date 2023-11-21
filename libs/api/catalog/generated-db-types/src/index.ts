import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';
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

export enum ItemScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    price = "price",
    picture = "picture",
    brand = "brand"
}

registerEnumType(ItemScalarFieldEnum, { name: 'ItemScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })

@ObjectType()
export class AggregateItem {
    @Field(() => ItemCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ItemCountAggregate>;
    @Field(() => ItemAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ItemAvgAggregate>;
    @Field(() => ItemSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ItemSumAggregate>;
    @Field(() => ItemMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ItemMinAggregate>;
    @Field(() => ItemMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ItemMaxAggregate>;
}

@ArgsType()
export class CreateManyItemArgs {
    @Field(() => [ItemCreateManyInput], {nullable:false})
    @Type(() => ItemCreateManyInput)
    @ValidateNested()
    data!: Array<ItemCreateManyInput>;
}

@ArgsType()
export class CreateOneItemArgs {
    @Field(() => ItemCreateInput, {nullable:false})
    @Type(() => ItemCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof ItemCreateInput>;
}

@ArgsType()
export class DeleteManyItemArgs {
    @Field(() => ItemWhereInput, {nullable:true})
    @Type(() => ItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ItemWhereInput>;
}

@ArgsType()
export class DeleteOneItemArgs {
    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstItemOrThrowArgs {
    @Field(() => ItemWhereInput, {nullable:true})
    @Type(() => ItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ItemWhereInput>;
    @Field(() => [ItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemOrderByWithRelationInput>;
    @Field(() => ItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ItemScalarFieldEnum>;
}

@ArgsType()
export class FindFirstItemArgs {
    @Field(() => ItemWhereInput, {nullable:true})
    @Type(() => ItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ItemWhereInput>;
    @Field(() => [ItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemOrderByWithRelationInput>;
    @Field(() => ItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ItemScalarFieldEnum>;
}

@ArgsType()
export class FindManyItemArgs {
    @Field(() => ItemWhereInput, {nullable:true})
    @Type(() => ItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ItemWhereInput>;
    @Field(() => [ItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemOrderByWithRelationInput>;
    @Field(() => ItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ItemScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueItemOrThrowArgs {
    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueItemArgs {
    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ItemAggregateArgs {
    @Field(() => ItemWhereInput, {nullable:true})
    @Type(() => ItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ItemWhereInput>;
    @Field(() => [ItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemOrderByWithRelationInput>;
    @Field(() => ItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ItemCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ItemCountAggregateInput>;
    @Field(() => ItemAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ItemAvgAggregateInput>;
    @Field(() => ItemSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ItemSumAggregateInput>;
    @Field(() => ItemMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ItemMinAggregateInput>;
    @Field(() => ItemMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ItemMaxAggregateInput>;
}

@InputType()
export class ItemAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
}

@ObjectType()
export class ItemAvgAggregate {
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
}

@InputType()
export class ItemAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class ItemCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    picture?: true;
    @Field(() => Boolean, {nullable:true})
    brand?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ItemCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Int, {nullable:false})
    picture!: number;
    @Field(() => Int, {nullable:false})
    brand!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ItemCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    picture?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
}

@InputType()
export class ItemCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    description!: string;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.Min(1)
    price!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    picture!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    brand!: string;
}

@InputType()
export class ItemCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    description!: string;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.Min(1)
    price!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    picture!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    brand!: string;
}

@ArgsType()
export class ItemGroupByArgs {
    @Field(() => ItemWhereInput, {nullable:true})
    @Type(() => ItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ItemWhereInput>;
    @Field(() => [ItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ItemOrderByWithAggregationInput>;
    @Field(() => [ItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ItemScalarFieldEnum>;
    @Field(() => ItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ItemScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ItemCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ItemCountAggregateInput>;
    @Field(() => ItemAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ItemAvgAggregateInput>;
    @Field(() => ItemSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ItemSumAggregateInput>;
    @Field(() => ItemMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ItemMinAggregateInput>;
    @Field(() => ItemMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ItemMaxAggregateInput>;
}

@ObjectType()
export class ItemGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    description!: string;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.Min(1)
    price!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    picture!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    brand!: string;
    @Field(() => ItemCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ItemCountAggregate>;
    @Field(() => ItemAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ItemAvgAggregate>;
    @Field(() => ItemSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ItemSumAggregate>;
    @Field(() => ItemMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ItemMinAggregate>;
    @Field(() => ItemMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ItemMaxAggregate>;
}

@InputType()
export class ItemMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    picture?: true;
    @Field(() => Boolean, {nullable:true})
    brand?: true;
}

@ObjectType()
export class ItemMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    picture?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    brand?: string;
}

@InputType()
export class ItemMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    picture?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
}

@InputType()
export class ItemMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    price?: true;
    @Field(() => Boolean, {nullable:true})
    picture?: true;
    @Field(() => Boolean, {nullable:true})
    brand?: true;
}

@ObjectType()
export class ItemMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    picture?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    brand?: string;
}

@InputType()
export class ItemMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    picture?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
}

@InputType()
export class ItemOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    picture?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
    @Field(() => ItemCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ItemCountOrderByAggregateInput>;
    @Field(() => ItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ItemAvgOrderByAggregateInput>;
    @Field(() => ItemMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ItemMaxOrderByAggregateInput>;
    @Field(() => ItemMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ItemMinOrderByAggregateInput>;
    @Field(() => ItemSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ItemSumOrderByAggregateInput>;
}

@InputType()
export class ItemOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    picture?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    brand?: keyof typeof SortOrder;
}

@InputType()
export class ItemScalarWhereWithAggregatesInput {
    @Field(() => [ItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ItemScalarWhereWithAggregatesInput>;
    @Field(() => [ItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ItemScalarWhereWithAggregatesInput>;
    @Field(() => [ItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ItemScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    price?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    picture?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    brand?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ItemSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    price?: true;
}

@ObjectType()
export class ItemSumAggregate {
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
}

@InputType()
export class ItemSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}

@InputType()
export class ItemUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(50)
    name!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    description!: string;
    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    @Validator.Min(1)
    price!: number;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    picture!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    brand!: string;
}

@InputType()
export class ItemUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    picture?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    brand?: string;
}

@InputType()
export class ItemUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    picture?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    brand?: string;
}

@InputType()
export class ItemUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    picture?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    brand?: string;
}

@InputType()
export class ItemUpdateInput {
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(50)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    description?: string;
    @Field(() => Float, {nullable:true})
    @Validator.IsNumber()
    @Validator.Min(1)
    price?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    picture?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    brand?: string;
}

@InputType()
export class ItemWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [ItemWhereInput], {nullable:true})
    AND?: Array<ItemWhereInput>;
    @Field(() => [ItemWhereInput], {nullable:true})
    OR?: Array<ItemWhereInput>;
    @Field(() => [ItemWhereInput], {nullable:true})
    NOT?: Array<ItemWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    price?: InstanceType<typeof FloatFilter>;
    @Field(() => StringFilter, {nullable:true})
    picture?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    brand?: InstanceType<typeof StringFilter>;
}

@InputType()
export class ItemWhereInput {
    @Field(() => [ItemWhereInput], {nullable:true})
    AND?: Array<ItemWhereInput>;
    @Field(() => [ItemWhereInput], {nullable:true})
    OR?: Array<ItemWhereInput>;
    @Field(() => [ItemWhereInput], {nullable:true})
    NOT?: Array<ItemWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    price?: InstanceType<typeof FloatFilter>;
    @Field(() => StringFilter, {nullable:true})
    picture?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    brand?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Item {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => Float, {nullable:false})
    price!: number;
    @Field(() => String, {nullable:false})
    picture!: string;
    @Field(() => String, {nullable:false})
    brand!: string;
}

@ArgsType()
export class UpdateManyItemArgs {
    @Field(() => ItemUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof ItemUpdateManyMutationInput>;
    @Field(() => ItemWhereInput, {nullable:true})
    @Type(() => ItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof ItemWhereInput>;
}

@ArgsType()
export class UpdateOneItemArgs {
    @Field(() => ItemUpdateInput, {nullable:false})
    @Type(() => ItemUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof ItemUpdateInput>;
    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneItemArgs {
    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<ItemWhereUniqueInput, 'id'>;
    @Field(() => ItemCreateInput, {nullable:false})
    @Type(() => ItemCreateInput)
    create!: InstanceType<typeof ItemCreateInput>;
    @Field(() => ItemUpdateInput, {nullable:false})
    @Type(() => ItemUpdateInput)
    update!: InstanceType<typeof ItemUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@ArgsType()
export class AggregateItemRawArgs {
    @Field(() => [GraphQLJSON], {nullable:true})
    pipeline?: Array<any>;
    @Field(() => GraphQLJSON, {nullable:true})
    options?: any;
}

@ArgsType()
export class FindItemRawArgs {
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
