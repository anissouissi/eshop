import { useProducts } from '@aso/web-catalog-data-access';
import {
  FilterSortContainer,
  Pagination,
  ProductList,
} from '@aso/web-catalog-ui';
import { useSearchParams } from 'react-router-dom';

function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page') ?? 1);

  const { products, pagesCount } = useProducts();

  const handlePageChange = (pageIndex?: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (pageIndex) {
      params.set('page', (pageIndex + 1).toString());
    } else {
      params.delete('page');
    }
    setSearchParams(params);
  };

  return (
    <FilterSortContainer>
      <div className="flex gap-7 flex-col items-center w-full">
        <ProductList products={products} />
        <Pagination
          currentPage={currentPage}
          pagesCount={pagesCount}
          onPageChange={handlePageChange}
        />
      </div>
    </FilterSortContainer>
  );
}

export default Catalog;
