import { Hero, StartShoppingButton } from '@aso/shared-ui';
import { ProductCarousel } from '@aso/web-catalog-ui';
import { NavLink } from 'react-router-dom';
import { useCatalog } from '../features/catalog/useCatalog';

function Home() {
  const { topPromotionProducts, topRatedProducts } = useCatalog();
  return (
    <div className="w-full flex flex-col gap-4">
      <Hero avatarImageUrl="/anis.jpg">
        <NavLink to="/catalog">
          <StartShoppingButton />
        </NavLink>
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
    </div>
  );
}

export default Home;
