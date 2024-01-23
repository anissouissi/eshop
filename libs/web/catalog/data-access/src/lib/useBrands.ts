import { useQuery } from '@tanstack/react-query';
import { getBrands } from './apiCatalog';

export function useBrands() {
  const { isLoading: isLoadingBrands, data: productBrands } = useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
  });

  return { isLoadingBrands, productBrands };
}
