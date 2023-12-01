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

export const GET_TOP_SALES_PRODUCTS = gql`
  query getTopSalesProducts {
    findAllProducts(orderBy: [{ discountPercentage: desc }], take: 10) {
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
