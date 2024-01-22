import { formatCurrency } from '@aso/shared-util';
import { BasketItem } from '@aso/data-access-graphql';
import { calculateTotal } from '@aso/web-basket-util';
import Navigation from '../navigation/navigation';

export interface BasketSummaryProps {
  items: BasketItem[];
}

export function BasketSummary({ items }: BasketSummaryProps) {
  const total = calculateTotal(items);
  const delivery = total >= 100 ? 0 : 10;

  return (
    <div className="card bg-base-100 shadow-xl h-min">
      <div className="card-body p-6">
        <h2 className="card-title">Order summary</h2>
        <div className="flex flex-row justify-between">
          <div>Items:</div>
          <div>{formatCurrency(total)}</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>Shipping:</div>
          <div className={delivery > 0 ? '' : 'line-through'}>
            {formatCurrency(10)}
          </div>
        </div>
        <div className="divider p-0 m-0"></div>
        <div className="flex flex-row justify-between mb-6">
          <div className="text-red-700 font-bold">Order total:</div>
          <div>{formatCurrency(total + delivery)}</div>
        </div>
        <div>If everything looks fine, proceed to checkout.</div>
        <div>
          You can still update your cart on this page, or continue shopping and
          come back later.
        </div>
        <div className="card-actions justify-end items-center mt-6">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default BasketSummary;
