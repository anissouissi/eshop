'use client';

import { useCatalog } from '../catalog-context';

export interface AddToBasketButtonProps {
  productId: string;
}

export function AddToBasketButton({ productId }: AddToBasketButtonProps) {
  const { onAddProductToBasket } = useCatalog();
  return (
    <button
      className="btn btn-primary"
      onClick={(e) => {
        e.stopPropagation();
        onAddProductToBasket?.(productId);
      }}
    >
      Add to basket
    </button>
  );
}

export default AddToBasketButton;
