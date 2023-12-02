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
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;