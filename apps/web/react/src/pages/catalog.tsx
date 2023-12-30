import { useCatalog } from '@aso/web-catalog-data-access';
import {
  FilterSortContainer,
  Pagination,
  ProductList,
} from '@aso/web-catalog-ui';

function Catalog() {
  const {
    productBrands = [],
    productCategories = [],
    products,
    productsCount,
    currentPageIndex,
    itemsPerPage,
  } = useCatalog();
  return (
    <FilterSortContainer
      brands={productBrands.map((productBrand) => productBrand.brand)}
      categories={productCategories.map(
        (productCategory) => productCategory.category
      )}
    >
      <div className="flex gap-7 flex-col items-center w-full">
        <ProductList products={products} />
        <Pagination
          currentPageIndex={currentPageIndex ?? 0}
          itemsCount={productsCount ?? 0}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </FilterSortContainer>
  );
}

export default Catalog;
