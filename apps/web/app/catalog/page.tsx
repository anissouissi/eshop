import { Pagination, ProductList, sort } from '@aso/web-catalog-ui';
import { gql } from '../../data-access/graphql-client';
import { ProductWhereInput } from '@aso/data-access-graphql';

const PAGE_SIZE = 9;

export default async function Catalog({
  searchParams,
}: {
  searchParams?: {
    brands?: string;
    categories?: string;
    sort?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const currentSort: sort = searchParams?.sort && JSON.parse(searchParams.sort);
  const currentBrands = searchParams?.brands?.split(',') || [];
  const currentCategories = searchParams?.categories?.split(',') || [];

  const where: ProductWhereInput = {};

  if (currentBrands.length > 0 || currentCategories.length > 0) {
    where.OR = [];
    currentBrands?.forEach((brand) =>
      where.OR?.push({ brand: { equals: brand } })
    );

    currentCategories?.forEach((category) =>
      where.OR?.push({ category: { equals: category } })
    );
  }

  const { findAllProducts: products } = await gql.getProducts({
    where,
    orderBy: currentSort
      ? { [currentSort.field]: currentSort.direction }
      : undefined,
    skip: (currentPage - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
  });

  const { countAllProducts: productsCount } = await gql.getProductsCount({
    where,
  });

  return (
    <div className="flex gap-7 flex-col items-center w-full">
      <ProductList products={products} />
      <Pagination
        currentPageIndex={currentPage - 1}
        itemsCount={productsCount}
        itemsPerPage={PAGE_SIZE}
      />
    </div>
  );
}
