import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { gql } from 'graphql-request';
export type GetUsersVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsers = { __typename?: 'Query', findAllUsers: Array<{ __typename?: 'User', id: string, name?: string | null, email: string }> };

export type GetTopRatedProductsVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTopRatedProducts = { __typename?: 'Query', findAllProducts: Array<{ __typename?: 'Product', id: string, title: string, brand: string, category: string, price: number, discountPercentage: number, rating: number, stock: number, thumbnail: string }> };

export type GetTopPromotionProductsVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTopPromotionProducts = { __typename?: 'Query', findAllProducts: Array<{ __typename?: 'Product', id: string, title: string, brand: string, category: string, price: number, discountPercentage: number, rating: number, stock: number, thumbnail: string }> };

export type GetProductsVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProductWhereInput>;
  orderBy?: Types.InputMaybe<Array<Types.ProductOrderByWithRelationInput> | Types.ProductOrderByWithRelationInput>;
  skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  take?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetProducts = { __typename?: 'Query', findAllProducts: Array<{ __typename?: 'Product', id: string, title: string, brand: string, description: string, category: string, price: number, discountPercentage: number, rating: number, stock: number, thumbnail: string }> };

export type GetProductsCountVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.ProductWhereInput>;
}>;


export type GetProductsCount = { __typename?: 'Query', countAllProducts: number };

export type GetProductVariables = Types.Exact<{
  where: Types.ProductWhereUniqueInput;
}>;


export type GetProduct = { __typename?: 'Query', findOneProduct: { __typename?: 'Product', id: string, title: string, description: string, brand: string, price: number, discountPercentage: number, rating: number, thumbnail: string, images?: Array<string> | null, category: string, stock: number } };

export type GetProductCategoriesVariables = Types.Exact<{ [key: string]: never; }>;


export type GetProductCategories = { __typename?: 'Query', findAllProducts: Array<{ __typename?: 'Product', category: string }> };

export type GetProductBrandsVariables = Types.Exact<{ [key: string]: never; }>;


export type GetProductBrands = { __typename?: 'Query', findAllProducts: Array<{ __typename?: 'Product', brand: string }> };

export type GetCustomerBasketVariables = Types.Exact<{
  where: Types.CustomerBasketWhereUniqueInput;
}>;


export type GetCustomerBasket = { __typename?: 'Query', findOneCustomerBasket: { __typename?: 'CustomerBasket', customerId?: string | null, id: string, items?: Array<{ __typename?: 'BasketItem', productId: string, quantity: number, product?: { __typename?: 'Product', brand: string, discountPercentage: number, thumbnail: string, title: string, price: number, stock: number } | null }> | null } };

export type CreateCustomerBasketVariables = Types.Exact<{
  data: Types.CustomerBasketCreateInput;
}>;


export type CreateCustomerBasket = { __typename?: 'Mutation', createCustomerBasket: { __typename?: 'CustomerBasket', id: string, customerId?: string | null, items?: Array<{ __typename?: 'BasketItem', productId: string, quantity: number, product?: { __typename?: 'Product', brand: string, category: string, price: number, stock: number, thumbnail: string, title: string, discountPercentage: number } | null }> | null } };

export type UpdateCustomerBasketVariables = Types.Exact<{
  data: Types.CustomerBasketUpdateInput;
  where: Types.CustomerBasketWhereUniqueInput;
}>;


export type UpdateCustomerBasket = { __typename?: 'Mutation', updateCustomerBasket: { __typename?: 'CustomerBasket', id: string, customerId?: string | null, items?: Array<{ __typename?: 'BasketItem', productId: string, quantity: number, product?: { __typename?: 'Product', brand: string, category: string, price: number, stock: number, thumbnail: string, title: string, discountPercentage: number } | null }> | null } };

export type RemoveCustomerBasketVariables = Types.Exact<{
  where: Types.CustomerBasketWhereUniqueInput;
}>;


export type RemoveCustomerBasket = { __typename?: 'Mutation', removeCustomerBasket: { __typename?: 'CustomerBasket', id: string } };


export const GetUsersDocument = /*#__PURE__*/ gql`
    query getUsers {
  findAllUsers {
    id
    name
    email
  }
}
    `;
export const GetTopRatedProductsDocument = /*#__PURE__*/ gql`
    query getTopRatedProducts {
  findAllProducts(orderBy: [{rating: desc}], take: 10) {
    id
    title
    brand
    category
    price
    discountPercentage
    rating
    stock
    thumbnail
  }
}
    `;
export const GetTopPromotionProductsDocument = /*#__PURE__*/ gql`
    query getTopPromotionProducts {
  findAllProducts(orderBy: [{discountPercentage: desc}], take: 10) {
    id
    title
    brand
    category
    price
    discountPercentage
    rating
    stock
    thumbnail
  }
}
    `;
export const GetProductsDocument = /*#__PURE__*/ gql`
    query getProducts($where: ProductWhereInput, $orderBy: [ProductOrderByWithRelationInput!], $skip: Int, $take: Int) {
  findAllProducts(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
    title
    brand
    description
    category
    price
    discountPercentage
    rating
    stock
    thumbnail
  }
}
    `;
export const GetProductsCountDocument = /*#__PURE__*/ gql`
    query getProductsCount($where: ProductWhereInput) {
  countAllProducts(where: $where)
}
    `;
export const GetProductDocument = /*#__PURE__*/ gql`
    query GetProduct($where: ProductWhereUniqueInput!) {
  findOneProduct(where: $where) {
    id
    title
    description
    brand
    price
    discountPercentage
    rating
    thumbnail
    images
    category
    stock
  }
}
    `;
export const GetProductCategoriesDocument = /*#__PURE__*/ gql`
    query getProductCategories {
  findAllProducts(distinct: [category], orderBy: [{category: asc}]) {
    category
  }
}
    `;
export const GetProductBrandsDocument = /*#__PURE__*/ gql`
    query getProductBrands {
  findAllProducts(distinct: [brand], orderBy: [{brand: asc}]) {
    brand
  }
}
    `;
export const GetCustomerBasketDocument = /*#__PURE__*/ gql`
    query GetCustomerBasket($where: CustomerBasketWhereUniqueInput!) {
  findOneCustomerBasket(where: $where) {
    customerId
    id
    items {
      product {
        brand
        discountPercentage
        thumbnail
        title
        price
        stock
      }
      productId
      quantity
    }
  }
}
    `;
export const CreateCustomerBasketDocument = /*#__PURE__*/ gql`
    mutation CreateCustomerBasket($data: CustomerBasketCreateInput!) {
  createCustomerBasket(data: $data) {
    id
    customerId
    items {
      product {
        brand
        category
        price
        stock
        thumbnail
        title
        discountPercentage
      }
      productId
      quantity
    }
  }
}
    `;
export const UpdateCustomerBasketDocument = /*#__PURE__*/ gql`
    mutation UpdateCustomerBasket($data: CustomerBasketUpdateInput!, $where: CustomerBasketWhereUniqueInput!) {
  updateCustomerBasket(data: $data, where: $where) {
    id
    customerId
    items {
      product {
        brand
        category
        price
        stock
        thumbnail
        title
        discountPercentage
      }
      productId
      quantity
    }
  }
}
    `;
export const RemoveCustomerBasketDocument = /*#__PURE__*/ gql`
    mutation RemoveCustomerBasket($where: CustomerBasketWhereUniqueInput!) {
  removeCustomerBasket(where: $where) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getUsers(variables?: GetUsersVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUsers> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsers>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsers', 'query');
    },
    getTopRatedProducts(variables?: GetTopRatedProductsVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTopRatedProducts> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTopRatedProducts>(GetTopRatedProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTopRatedProducts', 'query');
    },
    getTopPromotionProducts(variables?: GetTopPromotionProductsVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTopPromotionProducts> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTopPromotionProducts>(GetTopPromotionProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTopPromotionProducts', 'query');
    },
    getProducts(variables?: GetProductsVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProducts> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProducts>(GetProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProducts', 'query');
    },
    getProductsCount(variables?: GetProductsCountVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProductsCount> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductsCount>(GetProductsCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProductsCount', 'query');
    },
    GetProduct(variables: GetProductVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProduct> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProduct>(GetProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProduct', 'query');
    },
    getProductCategories(variables?: GetProductCategoriesVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProductCategories> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductCategories>(GetProductCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProductCategories', 'query');
    },
    getProductBrands(variables?: GetProductBrandsVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetProductBrands> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductBrands>(GetProductBrandsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProductBrands', 'query');
    },
    GetCustomerBasket(variables: GetCustomerBasketVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCustomerBasket> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCustomerBasket>(GetCustomerBasketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCustomerBasket', 'query');
    },
    CreateCustomerBasket(variables: CreateCustomerBasketVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateCustomerBasket> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCustomerBasket>(CreateCustomerBasketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateCustomerBasket', 'mutation');
    },
    UpdateCustomerBasket(variables: UpdateCustomerBasketVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateCustomerBasket> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateCustomerBasket>(UpdateCustomerBasketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateCustomerBasket', 'mutation');
    },
    RemoveCustomerBasket(variables: RemoveCustomerBasketVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveCustomerBasket> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveCustomerBasket>(RemoveCustomerBasketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RemoveCustomerBasket', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;