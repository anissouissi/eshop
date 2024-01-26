import { MdFilterAltOff } from 'react-icons/md';

export interface FilterListProps {
  title: string;
  list: string[];
  filters: string[];
  handleCheck: (item: string) => void;
  handleClear: () => void;
}

export function FilterList({
  title,
  list,
  filters = [],
  handleCheck,
  handleClear,
}: FilterListProps) {
  return (
    <>
      <div className="flex justify-between items-center h-12">
        <div>
          <span className="font-bold">{title}</span>
          {filters.length > 0 && (
            <div className="badge badge-secondary ml-2">{filters.length}</div>
          )}
        </div>
        {filters.length > 0 && (
          <button
            className="btn btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              handleClear();
            }}
          >
            <MdFilterAltOff className="h-4 w-4" />
            Clear
          </button>
        )}
      </div>
      <div className="max-h-64 overflow-auto">
        {list.map((item) => (
          <div key={item} className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
              <input
                type="checkbox"
                checked={filters.includes(item)}
                onChange={(e) => {
                  e.stopPropagation();
                  handleCheck(item);
                }}
                className="checkbox checkbox-sm"
                readOnly
              />
              <span className="label-text">{item}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

export default FilterList;
