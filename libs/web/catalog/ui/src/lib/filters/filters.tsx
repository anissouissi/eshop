import { useCatalog } from '../catalog-context';
import FilterList from '../filter-list/filter-list';

export interface FiltersProps {
  brands: string[];
  categories: string[];
}

export function Filters({ brands, categories }: FiltersProps) {
  const {
    onToggleBrand,
    onToggleCategory,
    brands: selectedBrands = [],
    categories: selectedCategories = [],
  } = useCatalog();
  const selectedFilters = [...selectedBrands, ...selectedCategories];
  return (
    <div className="flex flex-col gap-5">
      <div className="collapse collapse-plus border border-base-300 bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Brands</div>
        <div className="collapse-content max-h-80 overflow-auto">
          <FilterList
            list={brands}
            filters={selectedFilters}
            handleCheck={(item) => onToggleBrand?.(item)}
          />
        </div>
      </div>
      <div className="collapse collapse-plus border border-base-300 bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Categories</div>
        <div className="collapse-content max-h-80 overflow-auto">
          <FilterList
            list={categories}
            filters={selectedFilters}
            handleCheck={(item) => onToggleCategory?.(item)}
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
