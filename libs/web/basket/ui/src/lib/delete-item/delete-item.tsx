import { CustomerBasket } from '@aso/data-access-graphql';
import { useDeleteBasketItem } from '@aso/web-basket-data-access';
import { HiTrash } from 'react-icons/hi2';

export interface DeleteItemProps {
  productId: string;
  basket: CustomerBasket;
}

export function DeleteItem({ productId, basket }: DeleteItemProps) {
  const { deleteBasketItem } = useDeleteBasketItem();

  return (
    <button
      className="btn"
      onClick={(e) => {
        e.stopPropagation();
        deleteBasketItem({ basket, productId });
      }}
    >
      <HiTrash /> Delete
    </button>
  );
}

export default DeleteItem;
