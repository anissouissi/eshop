import { CustomerBasket } from '@aso/data-access-graphql';
import { useUpdateBasketItemQuantity } from '@aso/web-basket-data-access';

export interface UpdateItemQuantityProps {
  productId: string;
  basket: CustomerBasket;
  currentQuantity: number;
  maxQuantity: number;
}

export function UpdateItemQuantity({
  productId,
  basket,
  currentQuantity,
  maxQuantity,
}: UpdateItemQuantityProps) {
  const { updateBasketItemQuantity } = useUpdateBasketItemQuantity();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <button
        disabled={currentQuantity === 1}
        className="btn btn-circle"
        onClick={(e) => {
          e.stopPropagation();
          updateBasketItemQuantity({ basket, productId, quantity: -1 });
        }}
      >
        -
      </button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <button
        disabled={currentQuantity === maxQuantity}
        className="btn btn-circle"
        onClick={(e) => {
          e.stopPropagation();
          updateBasketItemQuantity({ basket, productId, quantity: 1 });
        }}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
