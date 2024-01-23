export interface ActiveFiltersProps {
  selectedBrands: string[];
  selectedCategories: string[];
  onToggleBrand: (brand: string) => void;
  onToggleCategory: (category: string) => void;
}

export function ActiveFilters({
  selectedBrands,
  selectedCategories,
  onToggleBrand,
  onToggleCategory,
}: ActiveFiltersProps) {
  return (
    <>
      {selectedBrands !== undefined && selectedBrands.length > 0 && (
        <div>
          <h1>Brands</h1>
          {selectedBrands.map((brand) => (
            <div key={brand} className="badge badge-info gap-2">
              <svg
                onClick={() => onToggleBrand(brand)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              {brand}
            </div>
          ))}
        </div>
      )}
      {selectedCategories !== undefined && selectedCategories.length > 0 && (
        <div>
          <h1>Categories</h1>
          {selectedCategories.map((category) => (
            <div key={category} className="badge badge-success gap-2">
              <svg
                onClick={() => onToggleCategory(category)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              {category}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ActiveFilters;
