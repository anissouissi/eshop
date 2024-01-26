import { PropsWithChildren, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MdFilterAlt } from 'react-icons/md';
import { HiXMark } from 'react-icons/hi2';

import Filters from '../filters/filters';
import Sort from '../sort/sort';

import { ISort, sorts } from '../sort';
import { useBrands, useCategories } from '@aso/web-catalog-data-access';

export function FilterSortContainer({ children }: PropsWithChildren) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { productBrands } = useBrands();
  const { productCategories } = useCategories();

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    searchParams.get('brands')?.split(',') || []
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('categories')?.split(',') || []
  );

  const [selectedSort, setSelectedSort] = useState<ISort | undefined>(
    searchParams.get('sort') && JSON.parse(searchParams.get('sort')!)
  );

  const allBrands = productBrands?.map((pb) => pb.brand) ?? [];
  const allCategories = productCategories?.map((pc) => pc.category) ?? [];

  const handleToggleBrand = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(newBrands);
    const params = new URLSearchParams(searchParams.toString());
    if (newBrands && newBrands.length > 0) {
      params.set('brands', newBrands.join(','));
    } else {
      params.delete('brands');
    }
    params.delete('page');
    setSearchParams(params);
  };

  const handleClearBrands = () => {
    setSelectedBrands([]);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('brands');
    params.delete('page');
    setSearchParams(params);
  };

  const handleToggleCategory = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    const params = new URLSearchParams(searchParams.toString());
    if (newCategories && newCategories.length > 0) {
      params.set('categories', newCategories.join(','));
    } else {
      params.delete('categories');
    }
    params.delete('page');
    setSearchParams(params);
  };

  const handleClearCategories = () => {
    setSelectedCategories([]);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('categories');
    params.delete('page');
    setSearchParams(params);
  };

  const handleSort = (sort?: ISort) => {
    setSelectedSort(sort);
    const params = new URLSearchParams(searchParams.toString());
    if (sort) {
      params.set('sort', JSON.stringify(sort));
    } else {
      params.delete('sort');
    }
    params.delete('page');
    setSearchParams(params);
  };

  return (
    <div className="drawer drawer-end">
      <input
        id="drawer"
        type="checkbox"
        checked={drawerOpen}
        readOnly
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300 flex-row-reverse lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="drawer"
              aria-label="open sidebar"
              className="btn btn-ghost"
              onClick={() => {
                setDrawerOpen(true);
              }}
            >
              <span className="font-bold">Sort & Filters</span>
              <MdFilterAlt className="h-6 w-6" />
            </label>
          </div>
          <div className="flex-none gap-2">
            {/* Navbar menu content here */}
          </div>
        </div>
        {/* Page content here */}
        <div className="flex justify-center md:gap-10">
          <div className="hidden lg:block p-3 max-w-xs">
            <Sort
              selectedSort={selectedSort}
              sorts={sorts}
              onSort={handleSort}
              key="sort-lg"
            />
            <div className="divider"></div>
            <Filters
              allBrands={allBrands}
              allCategories={allCategories}
              selectedBrands={selectedBrands}
              selectedCategories={selectedCategories}
              onToggleBrand={handleToggleBrand}
              onToggleCategory={handleToggleCategory}
              onClearBrands={handleClearBrands}
              onClearCategories={handleClearCategories}
              key="filters-lg"
            />
          </div>
          <div className="py-3">{children}</div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setDrawerOpen(false)}
        ></label>
        <div className="w-full md:w-80 min-h-full bg-base-200 absolute z-50">
          {/* Sidebar content here */}
          <div className="flex justify-between items-center p-2 mt-10 sticky top-16 z-50 bg-base-200">
            <h2 className="bold">Sorts & Filters</h2>
            <button
              className="btn btn-circle drawer-overlay"
              onClick={() => setDrawerOpen(false)}
            >
              <HiXMark className="h-6 w-6" />
            </button>
          </div>
          <div className="p-3 gap-3">
            <Sort
              selectedSort={selectedSort}
              sorts={sorts}
              onSort={handleSort}
              key="sort-sm"
            />
            <div className="divider"></div>
            <Filters
              allBrands={allBrands}
              allCategories={allCategories}
              selectedBrands={selectedBrands}
              selectedCategories={selectedCategories}
              onToggleBrand={handleToggleBrand}
              onToggleCategory={handleToggleCategory}
              onClearBrands={handleClearBrands}
              onClearCategories={handleClearCategories}
              key="filters-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSortContainer;
