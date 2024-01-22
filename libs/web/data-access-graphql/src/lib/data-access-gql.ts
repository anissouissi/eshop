import { gql } from 'graphql-request';

export const GET_USERS = gql`
  query getUsers {
    findAllUsers {
      id
      name
      email
    }
  }
`;

export const GET_TOP_RATED_PRODUCTS = gql`
  query getTopRatedProducts {
    findAllProducts(orderBy: [{ rating: desc }], take: 10) {
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

export const GET_TOP_PROMOTION_PRODUCTS = gql`
  query getTopPromotionProducts {
    findAllProducts(orderBy: [{ discountPercentage: desc }], take: 10) {
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

export const GET_PRODUCTS = gql`
  query getProducts(
    $where: ProductWhereInput
    $orderBy: [ProductOrderByWithRelationInput!]
    $skip: Int
    $take: Int
  ) {
    findAllProducts(
      where: $where
      orderBy: $orderBy
      skip: $skip
      take: $take
    ) {
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

export const GET_PRODUCTS_COUNT = gql`
  query getProductsCount($where: ProductWhereInput) {
    countAllProducts(where: $where)
  }
`;

export const GET_PRODUCT = gql`
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

export const GET_PRODUCT_CATEGORIES = gql`
  query getProductCategories {
    findAllProducts(distinct: [category], orderBy: [{ category: asc }]) {
      category
    }
  }
`;

export const GET_PRODUCT_BRANDS = gql`
  query getProductBrands {
    findAllProducts(distinct: [brand], orderBy: [{ brand: asc }]) {
      brand
    }
  }
`;

export const GET_CUSTOMER_BASKET = gql`
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

export const CREATE_CUSTOMER_BASKET = gql`
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

export const UPDATE_CUSTOMER_BASKET = gql`
  mutation UpdateCustomerBasket(
    $data: CustomerBasketUpdateInput!
    $where: CustomerBasketWhereUniqueInput!
  ) {
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

export const REMOVE_CUSTOMER_BASKET = gql`
  mutation RemoveCustomerBasket($where: CustomerBasketWhereUniqueInput!) {
    removeCustomerBasket(where: $where) {
      id
    }
  }
`;
