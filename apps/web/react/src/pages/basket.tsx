import { useBasket } from '@aso/web-basket-data-access';
import { BasketEmpty, BasketSummary, Table } from '@aso/web-basket-ui';

function Basket() {
  const { basket, isLoadingBasket } = useBasket();
  if (!basket || !basket.items?.length)
    return (
      <div className="flex justify-center w-full mt-10">
        <BasketEmpty />
      </div>
    );
  if (isLoadingBasket) {
    return '';
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 w-full m-5 gap-4">
      <BasketSummary items={basket.items} />
      <div className="lg:col-span-3">
        <Table basket={basket} />
      </div>
    </div>
  );
}

export default Basket;
