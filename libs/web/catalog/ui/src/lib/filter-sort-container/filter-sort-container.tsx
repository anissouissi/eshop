'use client';

import { PropsWithChildren, useState } from 'react';
import Filters from '../filters/filters';
import Sort from '../sort/sort';
import ActiveFilters from '../active-filters/active-filters';

export interface FilterSortContainerProps {
  brands: string[];
  categories: string[];
}

export function FilterSortContainer({
  brands,
  categories,
  children,
}: PropsWithChildren<FilterSortContainerProps>) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="drawer drawer-end">
      <input
        id="drawer"
        type="checkbox"
        checked={drawerOpen}
        readOnly
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300 flex-row-reverse">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="drawer"
              aria-label="open sidebar"
              className="btn btn-circle btn-ghost"
              onClick={() => {
                setDrawerOpen(true);
              }}
            >
              <svg
                className="h-5 w-5 fill-current"
                aria-hidden="true"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none">
            {/* Navbar menu content here */}
            <Sort />
          </div>
        </div>
        {/* Page content here */}
        <div className="grid grid-cols-4">
          <div className="col-span-1 hidden lg:block p-3 gap-3">
            <ActiveFilters key="active-filters-lg" />
            <Filters key="filters-lg" brands={brands} categories={categories} />
          </div>
          <div className="col-span-4 lg:col-span-3 py-3">{children}</div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setDrawerOpen(false)}
        ></label>
        <div className="w-full md:w-80 min-h-full bg-base-200 absolute top-16 z-50">
          {/* Sidebar content here */}
          <div className="flex justify-between items-center p-2">
            <h2>Filters</h2>
            <button
              className="btn btn-circle drawer-overlay"
              onClick={() => setDrawerOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-3 gap-3">
            <ActiveFilters key="active-filters-lg" />
            <Filters key="filters-sm" brands={brands} categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSortContainer;
