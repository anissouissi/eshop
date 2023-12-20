import Product from '../product/product';

export interface ProductListProps {
  products: {
    id: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
  }[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-around">
      {products.map((product) => (
        <div key={product.id} className="flex justify-center">
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
