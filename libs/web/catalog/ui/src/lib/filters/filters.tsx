import FilterList from '../filter-list/filter-list';

export interface FiltersProps {
  allBrands: string[];
  allCategories: string[];
  selectedBrands: string[];
  selectedCategories: string[];
  onToggleBrand: (brand: string) => void;
  onToggleCategory: (category: string) => void;
}

export function Filters({
  allBrands,
  allCategories,
  selectedBrands,
  selectedCategories,
  onToggleBrand,
  onToggleCategory,
}: FiltersProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="collapse collapse-plus border border-base-300 bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Brands</div>
        <div className="collapse-content max-h-80 overflow-auto">
          <FilterList
            list={allBrands}
            filters={selectedBrands}
            handleCheck={(item) => onToggleBrand(item)}
          />
        </div>
      </div>
      <div className="collapse collapse-plus border border-base-300 bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Categories</div>
        <div className="collapse-content max-h-80 overflow-auto">
          <FilterList
            list={allCategories}
            filters={selectedCategories}
            handleCheck={(item) => onToggleCategory(item)}
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
