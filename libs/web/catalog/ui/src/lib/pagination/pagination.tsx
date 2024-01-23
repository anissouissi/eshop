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
      <>
        <div className="join hidden md:block">
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
        <div className="join items-center md:hidden">
          <button
            disabled={currentPage === 1}
            className="join-item btn"
            onClick={() => onPageChange(currentPage - 2)}
          >
            «
          </button>
          <span className="join-item ml-3 mr-3">Page {currentPage}</span>
          <button
            disabled={currentPage === pagesCount}
            className="join-item btn"
            onClick={() => onPageChange(currentPage)}
          >
            »
          </button>
        </div>
      </>
    )
  );
}

export default Pagination;
