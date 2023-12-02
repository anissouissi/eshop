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
