import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProductsCount, getProducts } from './apiCatalog';
import { ProductWhereInput } from '@aso/data-access-graphql';

const PAGE_SIZE = 9;

export function useProducts() {
  const queryClient = useQueryClient();

  const [searchParams] = useSearchParams();

  const brands = searchParams.get('brands')?.split(',') || [];
  const categories = searchParams.get('categories')?.split(',') || [];
  const sort =
    searchParams.get('sort') && JSON.parse(searchParams.get('sort')!);
  const currentPageIndex = Number(searchParams.get('page') ?? 1) - 1;

  const where: ProductWhereInput = {};

  if ((brands && brands.length > 0) || (categories && categories.length > 0)) {
    where.OR = [];
    brands?.forEach((brand) => where.OR?.push({ brand: { equals: brand } }));

    categories?.forEach((category) =>
      where.OR?.push({ category: { equals: category } })
    );
  }

  const { isLoading: isLoadingProductsCount, data: productsCount } = useQuery({
    queryKey: ['productsCount', brands, categories],
    queryFn: () => getProductsCount(where),
  });

  const { isLoading: isLoadingProducts, data: products } = useQuery({
    queryKey: ['products', brands, categories, currentPageIndex, sort],
    queryFn: () => getProducts(where, PAGE_SIZE, sort, currentPageIndex),
  });

  let pagesCount = 0;

  if (productsCount && productsCount > 0) {
    // PRE-FETCHING
    pagesCount = Math.ceil(productsCount / PAGE_SIZE);

    if (currentPageIndex < pagesCount)
      queryClient.prefetchQuery({
        queryKey: ['products', brands, categories, currentPageIndex + 1, sort],
        queryFn: () =>
          getProducts(where, PAGE_SIZE, sort, currentPageIndex + 1),
      });

    if (currentPageIndex > 1)
      queryClient.prefetchQuery({
        queryKey: ['products', brands, categories, currentPageIndex - 1, sort],
        queryFn: () =>
          getProducts(where, PAGE_SIZE, sort, currentPageIndex - 1),
      });
  }

  return {
    isLoadingProducts,
    products,
    isLoadingProductsCount,
    productsCount,
    currentPageIndex,
    itemsPerPage: PAGE_SIZE,
    pagesCount,
  };
}
