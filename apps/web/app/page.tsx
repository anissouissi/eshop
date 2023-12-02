import { ProductCarousel } from '@aso/web-catalog-ui';
import { gql } from '../data-access/graphql-client';
import { Hero } from '@aso/shared-ui';

export default async function Index() {
  const { findAllProducts: topRatedProducts } = await gql.getTopRatedProducts();
  const { findAllProducts: topPromotionProducts } =
    await gql.getTopPromotionProducts();

  return (
    <>
      <Hero avatarImageUrl="/anis.jpg" />
      <ProductCarousel
        key="topRated"
        title="Top rated"
        products={topRatedProducts}
      />
      <ProductCarousel
        key="topPromotions"
        title="Top promotions"
        products={topPromotionProducts}
      />
    </>
  );
}
