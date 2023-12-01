import { ProductCarousel } from '@aso/web-catalog-ui';
import { gql } from '../data-access/graphql-client';
import { Hero } from '@aso/shared-ui';

export default async function Index() {
  const { findAllProducts: topRatedProducts } = await gql.getTopRatedProducts();
  const { findAllProducts: topSalesProducts } = await gql.getTopSalesProducts();

  return (
    <>
      <Hero avatarImageUrl="/anis.jpg" />
      <ProductCarousel
        key="topRated"
        title="Top rated"
        products={topRatedProducts}
      />
      <ProductCarousel
        key="topSales"
        title="Top sales"
        products={topSalesProducts}
      />
    </>
  );
}
