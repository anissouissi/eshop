import { useQuery } from '@tanstack/react-query';
import { getTopRatedProducts, getTopPromotionProducts } from './apiCatalog';

export function useCatalog() {
  const { isLoading: isLoadingTopRatedProducts, data: topRatedProducts } =
    useQuery({
      queryKey: ['topRatedProducts'],
      queryFn: getTopRatedProducts,
    });

  const {
    isLoading: isLoadingTopPromotionProducts,
    data: topPromotionProducts,
  } = useQuery({
    queryKey: ['topPromotionProducts'],
    queryFn: getTopPromotionProducts,
  });

  return {
    isLoadingTopRatedProducts,
    topRatedProducts,
    isLoadingTopPromotionProducts,
    topPromotionProducts,
  };
}
