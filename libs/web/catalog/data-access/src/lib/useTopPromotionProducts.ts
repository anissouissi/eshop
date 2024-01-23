import { useQuery } from '@tanstack/react-query';
import { getTopPromotionProducts } from './apiCatalog';

export function useTopPromotionProducts() {
  const {
    isLoading: isLoadingTopPromotionProducts,
    data: topPromotionProducts,
  } = useQuery({
    queryKey: ['topPromotionProducts'],
    queryFn: getTopPromotionProducts,
  });

  return { isLoadingTopPromotionProducts, topPromotionProducts };
}
