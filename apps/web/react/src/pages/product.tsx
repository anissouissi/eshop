import { useProduct } from '@aso/web-catalog-data-access';
import { ProductDetails } from '@aso/web-catalog-ui';

function Product() {
  const { isLoading, product } = useProduct();
  return !isLoading && <ProductDetails product={product} />;
}

export default Product;
