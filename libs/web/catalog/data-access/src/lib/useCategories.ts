import { useQuery } from '@tanstack/react-query';
import { getCategories } from './apiCatalog';

export function useCategories() {
  const { isLoading: isLoadingCategories, data: productCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return { isLoadingCategories, productCategories };
}
