'use client';

import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface sort {
  label: string;
  field: 'rating' | 'discountPercentage' | 'price' | 'brand' | 'category';
  direction: 'asc' | 'desc';
}

interface catalogParams {
  brands?: string[];
  categories?: string[];
  sort?: sort;
  itemsCount?: number;
  itemsPerPage?: number;
  currentPageIndex?: number;
  selectedProductId?: string;
  addedToBasketProductId?: string;
  onToggleBrand?: (brand: string) => void;
  onToggleCategory?: (category: string) => void;
  onSort?: (sort?: sort) => void;
  onPageChange?: (pageIndex?: number) => void;
  onSelectedProductChange?: (id?: string) => void;
  onAddProductToBasket?: (id?: string) => void;
}

const CatalogContext = createContext<catalogParams>({});

const sorts: sort[] = [
  { label: 'Top rated', direction: 'desc', field: 'rating' },
  { label: 'Top promotion', direction: 'desc', field: 'discountPercentage' },
  { label: 'Brand: ascending', direction: 'asc', field: 'brand' },
  { label: 'Brand: descending', direction: 'desc', field: 'brand' },
  { label: 'Category: ascending', direction: 'asc', field: 'category' },
  { label: 'Category: descending', direction: 'desc', field: 'category' },
  { label: 'Price: low to high', direction: 'asc', field: 'price' },
  { label: 'Price: high to low', direction: 'desc', field: 'price' },
];

function CatalogProvider({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const [brands, setBrands] = useState<string[]>(
    searchParams.get('brands')?.split(',') || []
  );
  const [categories, setCategories] = useState<string[]>(
    searchParams.get('categories')?.split(',') || []
  );
  const [sort, setSort] = useState<sort | undefined>(
    searchParams.get('sort') && JSON.parse(searchParams.get('sort')!)
  );
  const [currentPageIndex, setCurrentPageIndex] = useState<number | undefined>(
    Number(searchParams.get('page'))
  );
  const [selectedProductId, setSelectedProductId] = useState<
    string | undefined
  >(undefined);
  const [addedToBasketProductId, setAddedToBasketProductId] = useState<
    string | undefined
  >(undefined);

  const handleToggleBrand = (brand: string) => {
    const newBrands = brands?.includes(brand)
      ? brands.filter((b) => b !== brand)
      : [...brands, brand];
    setBrands(newBrands);
    const params = new URLSearchParams(searchParams.toString());
    if (newBrands && newBrands.length > 0) {
      params.set('brands', newBrands.join(','));
    } else {
      params.delete('brands');
    }
    params.delete('page');
    replace(`${pathname}?${params.toString()}`);
  };

  const handleToggleCategory = (category: string) => {
    const newCategories = categories?.includes(category)
      ? categories.filter((c) => c !== category)
      : [...categories, category];
    setCategories(newCategories);
    const params = new URLSearchParams(searchParams.toString());
    if (newCategories && newCategories.length > 0) {
      params.set('categories', newCategories.join(','));
    } else {
      params.delete('categories');
    }
    params.delete('page');
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSort = (sort?: sort) => {
    setSort(sort);
    const params = new URLSearchParams(searchParams.toString());
    if (sort) {
      params.set('sort', JSON.stringify(sort));
    } else {
      params.delete('sort');
    }
    params.delete('page');
    replace(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (pageIndex?: number) => {
    setCurrentPageIndex(pageIndex);
    const params = new URLSearchParams(searchParams.toString());
    if (pageIndex) {
      params.set('page', (pageIndex + 1).toString());
    } else {
      params.delete('page');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleAddProductToBasket = (id?: string) => {
    setAddedToBasketProductId(id);
  };

  const handleSelectedProductChange = (id?: string) => {
    setSelectedProductId(id);
    replace(`product/${id}`);
  };

  const value: catalogParams = {
    brands,
    categories,
    sort,
    currentPageIndex,
    selectedProductId,
    addedToBasketProductId,
    onSort: handleSort,
    onToggleBrand: handleToggleBrand,
    onToggleCategory: handleToggleCategory,
    onPageChange: handlePageChange,
    onSelectedProductChange: handleSelectedProductChange,
    onAddProductToBasket: handleAddProductToBasket,
  };

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
}

function useCatalog() {
  const context = useContext(CatalogContext);
  if (context === undefined)
    throw new Error('CatalogContext was used outside of the CatalogProvider');
  return context;
}

export { CatalogProvider, useCatalog, sorts, sort };
