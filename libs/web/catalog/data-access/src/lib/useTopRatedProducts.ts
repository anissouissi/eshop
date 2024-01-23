import { useQuery } from '@tanstack/react-query';
import { getTopRatedProducts } from './apiCatalog';

export function useTopRatedProducts() {
  const { isLoading: isLoadingTopRatedProducts, data: topRatedProducts } =
    useQuery({
      queryKey: ['topRatedProducts'],
      queryFn: getTopRatedProducts,
    });

  return { isLoadingTopRatedProducts, topRatedProducts };
}
