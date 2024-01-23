import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getProduct } from './apiCatalog';

export function useProduct() {
  const { productId } = useParams();

  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
  });

  return { isLoading, error, product };
}
