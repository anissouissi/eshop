import { useCatalog } from '@aso/web-catalog-data-access';
import { ProductDetails } from '@aso/web-catalog-ui';

function Product() {
  const { isLoadingProduct, product } = useCatalog();
  return !isLoadingProduct && <ProductDetails product={product} />;
}

export default Product;
