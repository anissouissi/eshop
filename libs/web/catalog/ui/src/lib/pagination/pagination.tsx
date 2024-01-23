export interface PaginationProps {
  pagesCount: number;
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
}

export function Pagination({
  pagesCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  return (
    pagesCount > 1 && (
      <div className="join">
        {[...Array(pagesCount).keys()].map((i) => (
          <button
            onClick={() => onPageChange(i)}
            key={i}
            className={`join-item btn ${
              i === currentPage - 1 ? 'btn-active' : ''
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
