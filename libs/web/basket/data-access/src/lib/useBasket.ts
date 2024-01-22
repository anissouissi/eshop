import { useQuery } from '@tanstack/react-query';
import { getCustomerBasket } from './apiBasket';

export function useBasket() {
  const basketId = localStorage.getItem('basketId');
  const { isLoading: isLoadingBasket, data: basket } = useQuery({
    queryKey: ['basket'],
    queryFn: () => getCustomerBasket(basketId),
  });

  return {
    isLoadingBasket,
    basket,
  };
}
