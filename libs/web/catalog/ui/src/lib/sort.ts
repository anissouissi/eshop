export interface ISort {
  label: string;
  field: 'rating' | 'discountPercentage' | 'price' | 'brand' | 'category';
  direction: 'asc' | 'desc';
}

export const sorts: ISort[] = [
  { label: 'Top rated', direction: 'desc', field: 'rating' },
  { label: 'Top promotion', direction: 'desc', field: 'discountPercentage' },
  { label: 'Brand: ascending', direction: 'asc', field: 'brand' },
  { label: 'Brand: descending', direction: 'desc', field: 'brand' },
  { label: 'Category: ascending', direction: 'asc', field: 'category' },
  { label: 'Category: descending', direction: 'desc', field: 'category' },
  { label: 'Price: low to high', direction: 'asc', field: 'price' },
  { label: 'Price: high to low', direction: 'desc', field: 'price' },
];
