import { ProductWhereInput } from '@aso/data-access-graphql';
import { gql } from './graphql-client';

export async function getTopRatedProducts() {
  const data = await gql.getTopRatedProducts();
  return data.findAllProducts;
}

export async function getTopPromotionProducts() {
  const data = await gql.getTopPromotionProducts();
  return data.findAllProducts;
}

export async function getBrands() {
  const data = await gql.getProductBrands();
  return data.findAllProducts;
}

export async function getCategories() {
  const data = await gql.getProductCategories();
  return data.findAllProducts;
}

export async function getProducts(
  where: ProductWhereInput,
  pageSize: number,
  currentSort?: { field: string; direction: string },
  currentPageIndex?: number
) {
  const { findAllProducts: products } = await gql.getProducts({
    where,
    orderBy: currentSort
      ? { [currentSort.field]: currentSort.direction }
      : undefined,
    skip: (currentPageIndex ?? 0) * pageSize,
    take: pageSize,
  });
  return products;
}

export async function getProductsCount(where: ProductWhereInput) {
  const { countAllProducts: productsCount } = await gql.getProductsCount({
    where,
  });
  return productsCount;
}

export async function getProduct(id?: string) {
  const { findOneProduct: product } = await gql.GetProduct({
    where: { id },
  });
  return product;
}
