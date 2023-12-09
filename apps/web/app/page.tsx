import { ProductCarousel } from '@aso/web-catalog-ui';
import { gql } from '../data-access/graphql-client';
import { Hero, StartShoppingButton } from '@aso/shared-ui';
import Link from 'next/link';

export default async function Index() {
  const { findAllProducts: topRatedProducts } = await gql.getTopRatedProducts();
  const { findAllProducts: topPromotionProducts } =
    await gql.getTopPromotionProducts();

  return (
    <>
      <Hero avatarImageUrl="/anis.jpg">
        <Link href="catalog">
          <StartShoppingButton />
        </Link>
      </Hero>
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
