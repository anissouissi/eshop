import FilterList from '../filter-list/filter-list';

export interface FiltersProps {
  allBrands: string[];
  allCategories: string[];
  selectedBrands: string[];
  selectedCategories: string[];
  onToggleBrand: (brand: string) => void;
  onToggleCategory: (category: string) => void;
  onClearBrands: () => void;
  onClearCategories: () => void;
}

export function Filters({
  allBrands,
  allCategories,
  selectedBrands,
  selectedCategories,
  onToggleBrand,
  onToggleCategory,
  onClearBrands,
  onClearCategories,
}: FiltersProps) {
  return (
    <div className="flex flex-col">
      <FilterList
        title="Brands"
        list={allBrands}
        filters={selectedBrands}
        handleCheck={(item) => onToggleBrand(item)}
        handleClear={onClearBrands}
      />
      <div className="divider"></div>
      <FilterList
        title="Categories"
        list={allCategories}
        filters={selectedCategories}
        handleCheck={(item) => onToggleCategory(item)}
        handleClear={onClearCategories}
      />
    </div>
  );
}

export default Filters;
