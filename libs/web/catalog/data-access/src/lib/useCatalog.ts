import { useQuery } from '@tanstack/react-query';
import {
  getTopRatedProducts,
  getTopPromotionProducts,
  getBrands,
  getCategories,
  getProductsCount,
  getProducts,
  getProduct,
} from './apiCatalog';
import { ProductWhereInput } from '@aso/data-access-graphql';

import { useCatalog as useCatalogContext } from '@aso/web-catalog-ui';
import { useParams } from 'react-router-dom';

const PAGE_SIZE = 9;

export function useCatalog() {
  const { productId } = useParams();

  const { brands, categories, currentPageIndex, sort } = useCatalogContext();

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

  const { isLoading: isLoadingProduct, data: product } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId),
  });

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

  const { isLoading: isLoadingBrands, data: productBrands } = useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
  });

  const { isLoading: isLoadingCategories, data: productCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return {
    isLoadingTopRatedProducts,
    topRatedProducts,
    isLoadingTopPromotionProducts,
    topPromotionProducts,
    isLoadingBrands,
    productBrands,
    isLoadingCategories,
    productCategories,
    isLoadingProducts,
    products,
    isLoadingProductsCount,
    productsCount,
    currentPageIndex,
    itemsPerPage: PAGE_SIZE,
    isLoadingProduct,
    product,
  };
}
