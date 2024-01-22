import { BasketItem } from '@aso/data-access-graphql';
import { getDiscountedPrice } from '@aso/shared-util';

export function calculateTotal(items?: BasketItem[] | null) {
  if (!items) {
    return 0;
  }

  return items.reduce((acc, current) => {
    acc +=
      current.quantity *
      getDiscountedPrice(
        current.product?.price,
        current.product?.discountPercentage
      );
    return acc;
  }, 0);
}
