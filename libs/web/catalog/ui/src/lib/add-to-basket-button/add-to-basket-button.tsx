import { useAddToBasket, useBasket } from '@aso/web-basket-data-access';

export interface AddToBasketButtonProps {
  productId: string;
}

export function AddToBasketButton({ productId }: AddToBasketButtonProps) {
  const { addToBasket } = useAddToBasket();
  const { basket } = useBasket();

  return (
    <button
      className="btn btn-primary"
      onClick={(e) => {
        e.stopPropagation();
        addToBasket({ productId, basket });
      }}
    >
      Add to basket
    </button>
  );
}

export default AddToBasketButton;
