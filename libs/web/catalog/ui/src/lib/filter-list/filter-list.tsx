export interface FilterListProps {
  list: string[];
  filters: string[];
  handleCheck: (item: string) => void;
}

export function FilterList({
  list,
  filters = [],
  handleCheck,
}: FilterListProps) {
  return list.map((item) => (
    <div key={item} className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{item}</span>
        <input
          type="checkbox"
          checked={filters.includes(item)}
          onChange={(e) => handleCheck(item)}
          className="checkbox checkbox-sm"
          readOnly
        />
      </label>
    </div>
  ));
}

export default FilterList;
