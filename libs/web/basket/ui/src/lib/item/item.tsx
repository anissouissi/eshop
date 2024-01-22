import { BasketItem, CustomerBasket } from '@aso/data-access-graphql';
import { formatCurrency, getDiscountedPrice } from '@aso/shared-util';
import UpdateItemQuantity from '../update-item-quantity/update-item-quantity';
import DeleteItem from '../delete-item/delete-item';

export interface ItemProps {
  item: BasketItem;
  basket: CustomerBasket;
}

export function Item({ item, basket }: ItemProps) {
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <div className="flex">
        <div className="avatar m-4">
          <div className="w-24 rounded">
            <img src={item.product?.thumbnail} alt="thumbnail" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-bold text-sm">{item.product?.brand}</div>
          <div>{item.product?.title}</div>
        </div>
      </div>
      <div className="flex items-center justify-between sm:gap-6">
        <div className="flex flex-col items-end">
          <p
            className={
              item.product && item.product?.discountPercentage > 0
                ? 'text-sm font-bold line-through'
                : 'hidden'
            }
          >
            {formatCurrency(
              item.quantity * (item.product ? item.product.price : 0)
            )}
          </p>
          <p className="text-sm font-bold">
            {item.product && item.product?.discountPercentage > 0
              ? formatCurrency(
                  item.quantity *
                    getDiscountedPrice(
                      item.product?.price,
                      item.product?.discountPercentage
                    )
                )
              : formatCurrency(
                  item.quantity * (item.product ? item.product.price : 0)
                )}
          </p>
        </div>
        <UpdateItemQuantity
          productId={item.productId}
          basket={basket}
          currentQuantity={item.quantity}
          maxQuantity={item.product?.stock ?? 100}
        />
        <DeleteItem productId={item.productId} basket={basket} />
      </div>
    </li>
  );
}

export default Item;
