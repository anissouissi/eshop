'use client';

import { useCatalog } from '../catalog-context';

export interface PaginationProps {
  itemsCount: number;
  itemsPerPage: number;
  currentPageIndex: number;
}

export function Pagination({
  itemsCount,
  itemsPerPage,
  currentPageIndex,
}: PaginationProps) {
  const { onPageChange } = useCatalog();
  if (!itemsPerPage || !itemsCount) {
    return;
  }
  const pageCount = Math.ceil(itemsCount / itemsPerPage);
  return (
    pageCount > 1 && (
      <div className="join">
        {[...Array(pageCount).keys()].map((i) => (
          <button
            onClick={() => onPageChange?.(i)}
            key={i}
            className={`join-item btn ${
              i === currentPageIndex ? 'btn-active' : ''
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    )
  );
}

export default Pagination;
