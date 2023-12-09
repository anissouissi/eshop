import { FilterSortContainer } from '@aso/web-catalog-ui';
import { gql } from '../../data-access/graphql-client';
import { Providers } from './providers';

export default async function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { findAllProducts: productBrands } = await gql.getProductBrands();
  const { findAllProducts: productCategories } =
    await gql.getProductCategories();

  return (
    <FilterSortContainer
      brands={productBrands.map((productBrand) => productBrand.brand)}
      categories={productCategories.map(
        (productCategory) => productCategory.category
      )}
    >
      <Providers>{children}</Providers>
    </FilterSortContainer>
  );
}
