import { MdOutlineFilterListOff } from 'react-icons/md';
import { ISort } from '../sort';

export interface SortProps {
  selectedSort?: ISort;
  sorts: ISort[];
  onSort: (sort?: ISort) => void;
}

export function Sort({ selectedSort, sorts, onSort }: SortProps) {
  return (
    <>
      <div className="flex justify-between items-center h-12">
        <div>
          <span className="font-bold">Sort</span>
        </div>
        {selectedSort && (
          <button
            className="btn btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              onSort(undefined);
            }}
          >
            <MdOutlineFilterListOff className="h-4 w-4" />
            Clear
          </button>
        )}
      </div>
      <ul className="menu w-56 p-0">
        {sorts.map((s, index) => (
          <li key={s.label} tabIndex={index + 1}>
            <button
              className={selectedSort?.label === s.label ? 'active' : ''}
              onClick={() => {
                onSort?.(s);
                //setOpen(false);
              }}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sort;
