import { gql } from './graphql-client';

export async function getTopRatedProducts() {
  const data = await gql.getTopRatedProducts();
  return data.findAllProducts;
}

export async function getTopPromotionProducts() {
  const data = await gql.getTopPromotionProducts();
  return data.findAllProducts;
}
