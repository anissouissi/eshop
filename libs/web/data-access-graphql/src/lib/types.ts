import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  address1: Scalars['String']['output'];
  address2: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  state: Scalars['String']['output'];
};

export type AddressCompositeFilter = {
  equals?: InputMaybe<AddressObjectEqualityInput>;
  is?: InputMaybe<AddressWhereInput>;
  isNot?: InputMaybe<AddressWhereInput>;
};

export type AddressCreateEnvelopeInput = {
  set?: InputMaybe<AddressCreateInput>;
};

export type AddressCreateInput = {
  address1: Scalars['String']['input'];
  address2: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type AddressObjectEqualityInput = {
  address1: Scalars['String']['input'];
  address2: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type AddressOrderByInput = {
  address1?: InputMaybe<SortOrder>;
  address2?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
};

export type AddressUpdateEnvelopeInput = {
  set?: InputMaybe<AddressCreateInput>;
  update?: InputMaybe<AddressUpdateInput>;
};

export type AddressUpdateInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  address1?: InputMaybe<StringFilter>;
  address2?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  postalCode?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
};

export type BasketItem = {
  __typename?: 'BasketItem';
  product?: Maybe<Product>;
  productId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export type BasketItemCreateInput = {
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type BasketItemObjectEqualityInput = {
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type BasketItemOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Customer = {
  __typename?: 'Customer';
  customerId: Scalars['String']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CustomerBasket = {
  __typename?: 'CustomerBasket';
  customerId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<BasketItem>>;
  user: User;
};

export type CustomerBasketCountAggregate = {
  __typename?: 'CustomerBasketCountAggregate';
  _all: Scalars['Int']['output'];
  customerId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

export type CustomerBasketCreateInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<BasketItemCreateInput>>;
};

export type CustomerBasketMaxAggregate = {
  __typename?: 'CustomerBasketMaxAggregate';
  customerId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CustomerBasketMinAggregate = {
  __typename?: 'CustomerBasketMinAggregate';
  customerId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CustomerBasketOrderByWithRelationInput = {
  customerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  items?: InputMaybe<BasketItemOrderByCompositeAggregateInput>;
};

export enum CustomerBasketScalarFieldEnum {
  CustomerId = 'customerId',
  Id = 'id'
}

export type CustomerBasketUpdateInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<BasketItemCreateInput>>;
};

export type CustomerBasketWhereInput = {
  AND?: InputMaybe<Array<CustomerBasketWhereInput>>;
  NOT?: InputMaybe<Array<CustomerBasketWhereInput>>;
  OR?: InputMaybe<Array<CustomerBasketWhereInput>>;
  customerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  items?: InputMaybe<Array<BasketItemObjectEqualityInput>>;
};

export type CustomerBasketWhereUniqueInput = {
  AND?: InputMaybe<Array<CustomerBasketWhereInput>>;
  NOT?: InputMaybe<Array<CustomerBasketWhereInput>>;
  OR?: InputMaybe<Array<CustomerBasketWhereInput>>;
  customerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<BasketItemObjectEqualityInput>>;
};

export type CustomerCompositeFilter = {
  equals?: InputMaybe<CustomerObjectEqualityInput>;
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
};

export type CustomerCreateEnvelopeInput = {
  set?: InputMaybe<CustomerCreateInput>;
};

export type CustomerCreateInput = {
  customerId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CustomerObjectEqualityInput = {
  customerId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CustomerOrderByInput = {
  customerId?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CustomerUpdateEnvelopeInput = {
  set?: InputMaybe<CustomerCreateInput>;
  update?: InputMaybe<CustomerUpdateInput>;
};

export type CustomerUpdateInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  customerId?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<EnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomerBasket: CustomerBasket;
  createOrder: Order;
  createProduct: Product;
  createUser: User;
  removeCustomerBasket: CustomerBasket;
  removeOrder: Order;
  removeProduct: Product;
  removeUser: User;
  updateCustomerBasket: CustomerBasket;
  updateOrder: Order;
  updateProduct: Product;
  updateUser: User;
};


export type MutationCreateCustomerBasketArgs = {
  data?: InputMaybe<CustomerBasketCreateInput>;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationRemoveCustomerBasketArgs = {
  where: CustomerBasketWhereUniqueInput;
};


export type MutationRemoveOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationRemoveProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateCustomerBasketArgs = {
  data: CustomerBasketUpdateInput;
  where: CustomerBasketWhereUniqueInput;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Order = {
  __typename?: 'Order';
  billingAddress: Address;
  customer: Customer;
  deliveredDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<OrderItem>>;
  orderDate: Scalars['DateTime']['output'];
  payment: PaymentCard;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  shippingAddress: Address;
  status: OrderStatus;
  underDeliveryDate?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  _all: Scalars['Int']['output'];
  deliveredDate: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  orderDate: Scalars['Int']['output'];
  paymentDate: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  underDeliveryDate: Scalars['Int']['output'];
};

export type OrderCreateInput = {
  billingAddress: AddressCreateEnvelopeInput;
  customer: CustomerCreateEnvelopeInput;
  deliveredDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<OrderItemCreateInput>>;
  orderDate: Scalars['DateTime']['input'];
  payment: PaymentCardCreateEnvelopeInput;
  paymentDate?: InputMaybe<Scalars['DateTime']['input']>;
  shippingAddress: AddressCreateEnvelopeInput;
  status: OrderStatus;
  underDeliveryDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  brand: Scalars['String']['output'];
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  discountPercentage: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  productId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type OrderItemCreateInput = {
  brand: Scalars['String']['input'];
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  discountPercentage: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  thumbnail: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type OrderItemObjectEqualityInput = {
  brand: Scalars['String']['input'];
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  discountPercentage: Scalars['Float']['input'];
  price: Scalars['Float']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  thumbnail: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type OrderItemOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  deliveredDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  orderDate?: Maybe<Scalars['DateTime']['output']>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<OrderStatus>;
  underDeliveryDate?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  deliveredDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  orderDate?: Maybe<Scalars['DateTime']['output']>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<OrderStatus>;
  underDeliveryDate?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderOrderByWithRelationInput = {
  billingAddress?: InputMaybe<AddressOrderByInput>;
  customer?: InputMaybe<CustomerOrderByInput>;
  deliveredDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  items?: InputMaybe<OrderItemOrderByCompositeAggregateInput>;
  orderDate?: InputMaybe<SortOrder>;
  payment?: InputMaybe<PaymentCardOrderByInput>;
  paymentDate?: InputMaybe<SortOrder>;
  shippingAddress?: InputMaybe<AddressOrderByInput>;
  status?: InputMaybe<SortOrder>;
  underDeliveryDate?: InputMaybe<SortOrder>;
};

export enum OrderScalarFieldEnum {
  DeliveredDate = 'deliveredDate',
  Id = 'id',
  OrderDate = 'orderDate',
  PaymentDate = 'paymentDate',
  Status = 'status',
  UnderDeliveryDate = 'underDeliveryDate'
}

export enum OrderStatus {
  Created = 'CREATED',
  Delivered = 'DELIVERED',
  Paid = 'PAID',
  Placed = 'PLACED',
  UnderDelivery = 'UNDER_DELIVERY'
}

export type OrderUpdateInput = {
  billingAddress?: InputMaybe<AddressUpdateEnvelopeInput>;
  customer?: InputMaybe<CustomerUpdateEnvelopeInput>;
  deliveredDate?: InputMaybe<Scalars['DateTime']['input']>;
  items?: InputMaybe<Array<OrderItemCreateInput>>;
  orderDate?: InputMaybe<Scalars['DateTime']['input']>;
  payment?: InputMaybe<PaymentCardUpdateEnvelopeInput>;
  paymentDate?: InputMaybe<Scalars['DateTime']['input']>;
  shippingAddress?: InputMaybe<AddressUpdateEnvelopeInput>;
  status?: InputMaybe<OrderStatus>;
  underDeliveryDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  billingAddress?: InputMaybe<AddressCompositeFilter>;
  customer?: InputMaybe<CustomerCompositeFilter>;
  deliveredDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  items?: InputMaybe<Array<OrderItemObjectEqualityInput>>;
  orderDate?: InputMaybe<DateTimeFilter>;
  payment?: InputMaybe<PaymentCardCompositeFilter>;
  paymentDate?: InputMaybe<DateTimeFilter>;
  shippingAddress?: InputMaybe<AddressCompositeFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  underDeliveryDate?: InputMaybe<DateTimeFilter>;
};

export type OrderWhereUniqueInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  billingAddress?: InputMaybe<AddressCompositeFilter>;
  customer?: InputMaybe<CustomerCompositeFilter>;
  deliveredDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<OrderItemObjectEqualityInput>>;
  orderDate?: InputMaybe<DateTimeFilter>;
  payment?: InputMaybe<PaymentCardCompositeFilter>;
  paymentDate?: InputMaybe<DateTimeFilter>;
  shippingAddress?: InputMaybe<AddressCompositeFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  underDeliveryDate?: InputMaybe<DateTimeFilter>;
};

export type PaymentCard = {
  __typename?: 'PaymentCard';
  cardNumber: Scalars['String']['output'];
  cvc: Scalars['String']['output'];
  expirationDate: Scalars['String']['output'];
  nameOnCard: Scalars['String']['output'];
};

export type PaymentCardCompositeFilter = {
  equals?: InputMaybe<PaymentCardObjectEqualityInput>;
  is?: InputMaybe<PaymentCardWhereInput>;
  isNot?: InputMaybe<PaymentCardWhereInput>;
};

export type PaymentCardCreateEnvelopeInput = {
  set?: InputMaybe<PaymentCardCreateInput>;
};

export type PaymentCardCreateInput = {
  cardNumber: Scalars['String']['input'];
  cvc: Scalars['String']['input'];
  expirationDate: Scalars['String']['input'];
  nameOnCard: Scalars['String']['input'];
};

export type PaymentCardObjectEqualityInput = {
  cardNumber: Scalars['String']['input'];
  cvc: Scalars['String']['input'];
  expirationDate: Scalars['String']['input'];
  nameOnCard: Scalars['String']['input'];
};

export type PaymentCardOrderByInput = {
  cardNumber?: InputMaybe<SortOrder>;
  cvc?: InputMaybe<SortOrder>;
  expirationDate?: InputMaybe<SortOrder>;
  nameOnCard?: InputMaybe<SortOrder>;
};

export type PaymentCardUpdateEnvelopeInput = {
  set?: InputMaybe<PaymentCardCreateInput>;
  update?: InputMaybe<PaymentCardUpdateInput>;
};

export type PaymentCardUpdateInput = {
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  cvc?: InputMaybe<Scalars['String']['input']>;
  expirationDate?: InputMaybe<Scalars['String']['input']>;
  nameOnCard?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentCardWhereInput = {
  AND?: InputMaybe<Array<PaymentCardWhereInput>>;
  NOT?: InputMaybe<Array<PaymentCardWhereInput>>;
  OR?: InputMaybe<Array<PaymentCardWhereInput>>;
  cardNumber?: InputMaybe<StringFilter>;
  cvc?: InputMaybe<StringFilter>;
  expirationDate?: InputMaybe<StringFilter>;
  nameOnCard?: InputMaybe<StringFilter>;
};

export type Product = {
  __typename?: 'Product';
  brand: Scalars['String']['output'];
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  discountPercentage: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  price: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  stock: Scalars['Int']['output'];
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  discountPercentage?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  stock?: Maybe<Scalars['Float']['output']>;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int']['output'];
  brand: Scalars['Int']['output'];
  category: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  discountPercentage: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  stock: Scalars['Int']['output'];
  thumbnail: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
};

export type ProductCreateInput = {
  brand: Scalars['String']['input'];
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  discountPercentage: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  price: Scalars['Float']['input'];
  rating: Scalars['Float']['input'];
  stock: Scalars['Int']['input'];
  thumbnail: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  brand?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountPercentage?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  brand?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountPercentage?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ProductOrderByWithRelationInput = {
  brand?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  discountPercentage?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  stock?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export enum ProductScalarFieldEnum {
  Brand = 'brand',
  Category = 'category',
  Description = 'description',
  DiscountPercentage = 'discountPercentage',
  Id = 'id',
  Images = 'images',
  Price = 'price',
  Rating = 'rating',
  Stock = 'stock',
  Thumbnail = 'thumbnail',
  Title = 'title'
}

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  discountPercentage?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
};

export type ProductUpdateInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountPercentage?: InputMaybe<Scalars['Float']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  brand?: InputMaybe<StringFilter>;
  category?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  discountPercentage?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringListFilter>;
  price?: InputMaybe<FloatFilter>;
  rating?: InputMaybe<FloatFilter>;
  stock?: InputMaybe<IntFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProductWhereUniqueInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  brand?: InputMaybe<StringFilter>;
  category?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  discountPercentage?: InputMaybe<FloatFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<StringListFilter>;
  price?: InputMaybe<FloatFilter>;
  rating?: InputMaybe<FloatFilter>;
  stock?: InputMaybe<IntFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type Query = {
  __typename?: 'Query';
  countAllCustomerBaskets: Scalars['Float']['output'];
  countAllOrders: Scalars['Float']['output'];
  countAllProducts: Scalars['Float']['output'];
  findAllCustomerBaskets: Array<CustomerBasket>;
  findAllOrders: Array<Order>;
  findAllProducts: Array<Product>;
  findAllUsers: Array<User>;
  findOneCustomerBasket: CustomerBasket;
  findOneOrder: Order;
  findOneProduct: Product;
  findOneUser: User;
};


export type QueryCountAllCustomerBasketsArgs = {
  cursor?: InputMaybe<CustomerBasketWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerBasketScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerBasketOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerBasketWhereInput>;
};


export type QueryCountAllOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryCountAllProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindAllCustomerBasketsArgs = {
  cursor?: InputMaybe<CustomerBasketWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerBasketScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerBasketOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerBasketWhereInput>;
};


export type QueryFindAllOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryFindAllProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindOneCustomerBasketArgs = {
  where: CustomerBasketWhereUniqueInput;
};


export type QueryFindOneOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryFindOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryFindOneUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = {
  __typename?: 'User';
  customerBaskets: Array<CustomerBasket>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AddressCompositeFilter: AddressCompositeFilter;
  AddressCreateEnvelopeInput: AddressCreateEnvelopeInput;
  AddressCreateInput: AddressCreateInput;
  AddressObjectEqualityInput: AddressObjectEqualityInput;
  AddressOrderByInput: AddressOrderByInput;
  AddressUpdateEnvelopeInput: AddressUpdateEnvelopeInput;
  AddressUpdateInput: AddressUpdateInput;
  AddressWhereInput: AddressWhereInput;
  BasketItem: ResolverTypeWrapper<BasketItem>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  BasketItemCreateInput: BasketItemCreateInput;
  BasketItemObjectEqualityInput: BasketItemObjectEqualityInput;
  BasketItemOrderByCompositeAggregateInput: BasketItemOrderByCompositeAggregateInput;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerBasket: ResolverTypeWrapper<CustomerBasket>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  CustomerBasketCountAggregate: ResolverTypeWrapper<CustomerBasketCountAggregate>;
  CustomerBasketCreateInput: CustomerBasketCreateInput;
  CustomerBasketMaxAggregate: ResolverTypeWrapper<CustomerBasketMaxAggregate>;
  CustomerBasketMinAggregate: ResolverTypeWrapper<CustomerBasketMinAggregate>;
  CustomerBasketOrderByWithRelationInput: CustomerBasketOrderByWithRelationInput;
  CustomerBasketScalarFieldEnum: CustomerBasketScalarFieldEnum;
  CustomerBasketUpdateInput: CustomerBasketUpdateInput;
  CustomerBasketWhereInput: CustomerBasketWhereInput;
  CustomerBasketWhereUniqueInput: CustomerBasketWhereUniqueInput;
  CustomerCompositeFilter: CustomerCompositeFilter;
  CustomerCreateEnvelopeInput: CustomerCreateEnvelopeInput;
  CustomerCreateInput: CustomerCreateInput;
  CustomerObjectEqualityInput: CustomerObjectEqualityInput;
  CustomerOrderByInput: CustomerOrderByInput;
  CustomerUpdateEnvelopeInput: CustomerUpdateEnvelopeInput;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomerWhereInput: CustomerWhereInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeFilter: DateTimeFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  EnumOrderStatusFilter: EnumOrderStatusFilter;
  FloatFilter: FloatFilter;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  IntFilter: IntFilter;
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<Order>;
  OrderCountAggregate: ResolverTypeWrapper<OrderCountAggregate>;
  OrderCreateInput: OrderCreateInput;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderItemCreateInput: OrderItemCreateInput;
  OrderItemObjectEqualityInput: OrderItemObjectEqualityInput;
  OrderItemOrderByCompositeAggregateInput: OrderItemOrderByCompositeAggregateInput;
  OrderMaxAggregate: ResolverTypeWrapper<OrderMaxAggregate>;
  OrderMinAggregate: ResolverTypeWrapper<OrderMinAggregate>;
  OrderOrderByWithRelationInput: OrderOrderByWithRelationInput;
  OrderScalarFieldEnum: OrderScalarFieldEnum;
  OrderStatus: OrderStatus;
  OrderUpdateInput: OrderUpdateInput;
  OrderWhereInput: OrderWhereInput;
  OrderWhereUniqueInput: OrderWhereUniqueInput;
  PaymentCard: ResolverTypeWrapper<PaymentCard>;
  PaymentCardCompositeFilter: PaymentCardCompositeFilter;
  PaymentCardCreateEnvelopeInput: PaymentCardCreateEnvelopeInput;
  PaymentCardCreateInput: PaymentCardCreateInput;
  PaymentCardObjectEqualityInput: PaymentCardObjectEqualityInput;
  PaymentCardOrderByInput: PaymentCardOrderByInput;
  PaymentCardUpdateEnvelopeInput: PaymentCardUpdateEnvelopeInput;
  PaymentCardUpdateInput: PaymentCardUpdateInput;
  PaymentCardWhereInput: PaymentCardWhereInput;
  Product: ResolverTypeWrapper<Product>;
  ProductAvgAggregate: ResolverTypeWrapper<ProductAvgAggregate>;
  ProductCountAggregate: ResolverTypeWrapper<ProductCountAggregate>;
  ProductCreateInput: ProductCreateInput;
  ProductMaxAggregate: ResolverTypeWrapper<ProductMaxAggregate>;
  ProductMinAggregate: ResolverTypeWrapper<ProductMinAggregate>;
  ProductOrderByWithRelationInput: ProductOrderByWithRelationInput;
  ProductScalarFieldEnum: ProductScalarFieldEnum;
  ProductSumAggregate: ResolverTypeWrapper<ProductSumAggregate>;
  ProductUpdateInput: ProductUpdateInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  SortOrder: SortOrder;
  StringFilter: StringFilter;
  StringListFilter: StringListFilter;
  User: ResolverTypeWrapper<User>;
  UserCountAggregate: ResolverTypeWrapper<UserCountAggregate>;
  UserCreateInput: UserCreateInput;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  String: Scalars['String']['output'];
  AddressCompositeFilter: AddressCompositeFilter;
  AddressCreateEnvelopeInput: AddressCreateEnvelopeInput;
  AddressCreateInput: AddressCreateInput;
  AddressObjectEqualityInput: AddressObjectEqualityInput;
  AddressOrderByInput: AddressOrderByInput;
  AddressUpdateEnvelopeInput: AddressUpdateEnvelopeInput;
  AddressUpdateInput: AddressUpdateInput;
  AddressWhereInput: AddressWhereInput;
  BasketItem: BasketItem;
  Int: Scalars['Int']['output'];
  BasketItemCreateInput: BasketItemCreateInput;
  BasketItemObjectEqualityInput: BasketItemObjectEqualityInput;
  BasketItemOrderByCompositeAggregateInput: BasketItemOrderByCompositeAggregateInput;
  Customer: Customer;
  CustomerBasket: CustomerBasket;
  ID: Scalars['ID']['output'];
  CustomerBasketCountAggregate: CustomerBasketCountAggregate;
  CustomerBasketCreateInput: CustomerBasketCreateInput;
  CustomerBasketMaxAggregate: CustomerBasketMaxAggregate;
  CustomerBasketMinAggregate: CustomerBasketMinAggregate;
  CustomerBasketOrderByWithRelationInput: CustomerBasketOrderByWithRelationInput;
  CustomerBasketUpdateInput: CustomerBasketUpdateInput;
  CustomerBasketWhereInput: CustomerBasketWhereInput;
  CustomerBasketWhereUniqueInput: CustomerBasketWhereUniqueInput;
  CustomerCompositeFilter: CustomerCompositeFilter;
  CustomerCreateEnvelopeInput: CustomerCreateEnvelopeInput;
  CustomerCreateInput: CustomerCreateInput;
  CustomerObjectEqualityInput: CustomerObjectEqualityInput;
  CustomerOrderByInput: CustomerOrderByInput;
  CustomerUpdateEnvelopeInput: CustomerUpdateEnvelopeInput;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomerWhereInput: CustomerWhereInput;
  DateTime: Scalars['DateTime']['output'];
  DateTimeFilter: DateTimeFilter;
  Boolean: Scalars['Boolean']['output'];
  EnumOrderStatusFilter: EnumOrderStatusFilter;
  FloatFilter: FloatFilter;
  Float: Scalars['Float']['output'];
  IntFilter: IntFilter;
  Mutation: {};
  Order: Order;
  OrderCountAggregate: OrderCountAggregate;
  OrderCreateInput: OrderCreateInput;
  OrderItem: OrderItem;
  OrderItemCreateInput: OrderItemCreateInput;
  OrderItemObjectEqualityInput: OrderItemObjectEqualityInput;
  OrderItemOrderByCompositeAggregateInput: OrderItemOrderByCompositeAggregateInput;
  OrderMaxAggregate: OrderMaxAggregate;
  OrderMinAggregate: OrderMinAggregate;
  OrderOrderByWithRelationInput: OrderOrderByWithRelationInput;
  OrderUpdateInput: OrderUpdateInput;
  OrderWhereInput: OrderWhereInput;
  OrderWhereUniqueInput: OrderWhereUniqueInput;
  PaymentCard: PaymentCard;
  PaymentCardCompositeFilter: PaymentCardCompositeFilter;
  PaymentCardCreateEnvelopeInput: PaymentCardCreateEnvelopeInput;
  PaymentCardCreateInput: PaymentCardCreateInput;
  PaymentCardObjectEqualityInput: PaymentCardObjectEqualityInput;
  PaymentCardOrderByInput: PaymentCardOrderByInput;
  PaymentCardUpdateEnvelopeInput: PaymentCardUpdateEnvelopeInput;
  PaymentCardUpdateInput: PaymentCardUpdateInput;
  PaymentCardWhereInput: PaymentCardWhereInput;
  Product: Product;
  ProductAvgAggregate: ProductAvgAggregate;
  ProductCountAggregate: ProductCountAggregate;
  ProductCreateInput: ProductCreateInput;
  ProductMaxAggregate: ProductMaxAggregate;
  ProductMinAggregate: ProductMinAggregate;
  ProductOrderByWithRelationInput: ProductOrderByWithRelationInput;
  ProductSumAggregate: ProductSumAggregate;
  ProductUpdateInput: ProductUpdateInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  Query: {};
  StringFilter: StringFilter;
  StringListFilter: StringListFilter;
  User: User;
  UserCountAggregate: UserCountAggregate;
  UserCreateInput: UserCreateInput;
  UserMaxAggregate: UserMaxAggregate;
  UserMinAggregate: UserMinAggregate;
  UserUpdateInput: UserUpdateInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  address1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BasketItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BasketItem'] = ResolversParentTypes['BasketItem']> = {
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  customerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerBasketResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerBasket'] = ResolversParentTypes['CustomerBasket']> = {
  customerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<ResolversTypes['BasketItem']>>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerBasketCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerBasketCountAggregate'] = ResolversParentTypes['CustomerBasketCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerBasketMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerBasketMaxAggregate'] = ResolversParentTypes['CustomerBasketMaxAggregate']> = {
  customerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerBasketMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerBasketMinAggregate'] = ResolversParentTypes['CustomerBasketMinAggregate']> = {
  customerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCustomerBasket?: Resolver<ResolversTypes['CustomerBasket'], ParentType, ContextType, Partial<MutationCreateCustomerBasketArgs>>;
  createOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'data'>>;
  createProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'data'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>;
  removeCustomerBasket?: Resolver<ResolversTypes['CustomerBasket'], ParentType, ContextType, RequireFields<MutationRemoveCustomerBasketArgs, 'where'>>;
  removeOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationRemoveOrderArgs, 'where'>>;
  removeProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationRemoveProductArgs, 'where'>>;
  removeUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationRemoveUserArgs, 'where'>>;
  updateCustomerBasket?: Resolver<ResolversTypes['CustomerBasket'], ParentType, ContextType, RequireFields<MutationUpdateCustomerBasketArgs, 'data' | 'where'>>;
  updateOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, 'data' | 'where'>>;
  updateProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'data' | 'where'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'where'>>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  billingAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  deliveredDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<ResolversTypes['OrderItem']>>, ParentType, ContextType>;
  orderDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  payment?: Resolver<ResolversTypes['PaymentCard'], ParentType, ContextType>;
  paymentDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  shippingAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  underDeliveryDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderCountAggregate'] = ResolversParentTypes['OrderCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deliveredDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  paymentDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  underDeliveryDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']> = {
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discountPercentage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderMaxAggregate'] = ResolversParentTypes['OrderMaxAggregate']> = {
  deliveredDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  paymentDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrderStatus']>, ParentType, ContextType>;
  underDeliveryDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderMinAggregate'] = ResolversParentTypes['OrderMinAggregate']> = {
  deliveredDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  paymentDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrderStatus']>, ParentType, ContextType>;
  underDeliveryDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentCardResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentCard'] = ResolversParentTypes['PaymentCard']> = {
  cardNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cvc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expirationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameOnCard?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discountPercentage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductAvgAggregate'] = ResolversParentTypes['ProductAvgAggregate']> = {
  discountPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCountAggregate'] = ResolversParentTypes['ProductCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  brand?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  discountPercentage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  images?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMaxAggregate'] = ResolversParentTypes['ProductMaxAggregate']> = {
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discountPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductMinAggregate'] = ResolversParentTypes['ProductMinAggregate']> = {
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discountPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductSumAggregate'] = ResolversParentTypes['ProductSumAggregate']> = {
  discountPercentage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  countAllCustomerBaskets?: Resolver<ResolversTypes['Float'], ParentType, ContextType, Partial<QueryCountAllCustomerBasketsArgs>>;
  countAllOrders?: Resolver<ResolversTypes['Float'], ParentType, ContextType, Partial<QueryCountAllOrdersArgs>>;
  countAllProducts?: Resolver<ResolversTypes['Float'], ParentType, ContextType, Partial<QueryCountAllProductsArgs>>;
  findAllCustomerBaskets?: Resolver<Array<ResolversTypes['CustomerBasket']>, ParentType, ContextType, Partial<QueryFindAllCustomerBasketsArgs>>;
  findAllOrders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, Partial<QueryFindAllOrdersArgs>>;
  findAllProducts?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, Partial<QueryFindAllProductsArgs>>;
  findAllUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  findOneCustomerBasket?: Resolver<ResolversTypes['CustomerBasket'], ParentType, ContextType, RequireFields<QueryFindOneCustomerBasketArgs, 'where'>>;
  findOneOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<QueryFindOneOrderArgs, 'where'>>;
  findOneProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryFindOneProductArgs, 'where'>>;
  findOneUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryFindOneUserArgs, 'where'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  customerBaskets?: Resolver<Array<ResolversTypes['CustomerBasket']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCountAggregate'] = ResolversParentTypes['UserCountAggregate']> = {
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMaxAggregate'] = ResolversParentTypes['UserMaxAggregate']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMinAggregate'] = ResolversParentTypes['UserMinAggregate']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  BasketItem?: BasketItemResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerBasket?: CustomerBasketResolvers<ContextType>;
  CustomerBasketCountAggregate?: CustomerBasketCountAggregateResolvers<ContextType>;
  CustomerBasketMaxAggregate?: CustomerBasketMaxAggregateResolvers<ContextType>;
  CustomerBasketMinAggregate?: CustomerBasketMinAggregateResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderCountAggregate?: OrderCountAggregateResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  OrderMaxAggregate?: OrderMaxAggregateResolvers<ContextType>;
  OrderMinAggregate?: OrderMinAggregateResolvers<ContextType>;
  PaymentCard?: PaymentCardResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductAvgAggregate?: ProductAvgAggregateResolvers<ContextType>;
  ProductCountAggregate?: ProductCountAggregateResolvers<ContextType>;
  ProductMaxAggregate?: ProductMaxAggregateResolvers<ContextType>;
  ProductMinAggregate?: ProductMinAggregateResolvers<ContextType>;
  ProductSumAggregate?: ProductSumAggregateResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCountAggregate?: UserCountAggregateResolvers<ContextType>;
  UserMaxAggregate?: UserMaxAggregateResolvers<ContextType>;
  UserMinAggregate?: UserMinAggregateResolvers<ContextType>;
};

