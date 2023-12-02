import { formatCurrency, getDiscountedPrice } from '@aso/shared-util';
import Availability from '../availability/availability';
import Price from '../price/price';
import Rating from '../rating/rating';
import Discount from '../discount/discount';

export interface ProductProps {
  product: {
    id: string;
    title: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
  };
}

export function Product({ product }: ProductProps) {
  return (
    <div className="card card-compact w-72 glass">
      <figure>
        <div className="absolute top-0 left-0 w-[100%] rounded-t-[1rem] opacity-80 overflow-hidden">
          <Discount discountPercentage={product.discountPercentage} />
        </div>
        <img src={product.thumbnail} alt={product.title} className="h-52" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.brand}</h2>
        <h1 className="font-bold h-10">{product.title}</h1>
        <div className="badge badge-outline">{product.category}</div>
        <div className="card-actions justify-between items-center">
          <Rating rating={product.rating} />
          <Price
            price={formatCurrency(product.price)}
            discountedPrice={getDiscountedPrice(
              product.price,
              product.discountPercentage
            )}
          />
        </div>
        <div className="card-actions justify-between items-center">
          <Availability stock={product.stock} />
          <button className="btn btn-primary">Add to basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
