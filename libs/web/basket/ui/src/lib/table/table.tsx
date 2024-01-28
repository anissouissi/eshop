import { CustomerBasket } from '@aso/data-access-graphql';
import Item from '../item/item';
import Navigation from '../navigation/navigation';
import { calculateTotal } from '@aso/web-basket-util';
import { formatCurrency } from '@aso/shared-util';

export interface TableProps {
  basket: CustomerBasket;
}

export function Table({ basket }: TableProps) {
  const total = calculateTotal(basket.items);
  const delivery = total >= 100 ? 0 : 10;
  return (
    <div className="card bg-base-100 shadow-xl mb-5">
      <div className="card-body p-6">
        <h2 className="card-title">Your basket</h2>
        <ul className="mt-3 divide-y divide-stone-200">
          {basket.items?.map((item) => (
            <Item key={item.productId} item={item} basket={basket} />
          ))}
          <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <div>Shipping:</div>
            <div className={delivery > 0 ? '' : 'line-through'}>
              {formatCurrency(10)}
            </div>
          </li>
          <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <div className="text-red-700 font-bold">Order total:</div>
            <div>{formatCurrency(total + delivery)}</div>
          </li>
        </ul>
        <div className="card-actions justify-end items-center mt-6">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Table;
