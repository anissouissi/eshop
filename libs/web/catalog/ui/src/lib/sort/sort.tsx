import { ISort } from '../sort';

export interface SortProps {
  selectedSort?: ISort;
  sorts: ISort[];
  onSort: (sort?: ISort) => void;
}

export function Sort({ selectedSort, sorts, onSort }: SortProps) {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Sort by {`${selectedSort ? selectedSort.label : ''}`}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li key="clear-sort">
          <button onClick={() => onSort(undefined)}>Clear sort</button>
        </li>
        {sorts.map((s) => (
          <li
            key={s.label}
            className={selectedSort?.label === s.label ? 'font-bold' : ''}
          >
            <button onClick={() => onSort?.(s)}>{s.label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sort;
