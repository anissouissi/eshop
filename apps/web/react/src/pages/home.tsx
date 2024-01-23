import { Hero, StartShoppingButton } from '@aso/shared-ui';
import {
  useTopPromotionProducts,
  useTopRatedProducts,
} from '@aso/web-catalog-data-access';
import { ProductCarousel } from '@aso/web-catalog-ui';
import { NavLink } from 'react-router-dom';

function Home() {
  const { topPromotionProducts } = useTopPromotionProducts();
  const { topRatedProducts } = useTopRatedProducts();

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
