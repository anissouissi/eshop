import ProductCard from '../product-card/product-card';
import { Product } from '@aso/data-access-graphql';

export interface ProductListProps {
  products: Partial<Product>[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-around">
      {products.map((product) => (
        <div key={product.id} className="flex justify-center">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
