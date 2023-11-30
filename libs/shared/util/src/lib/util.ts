export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
    value
  );

export const getDiscountedPrice = (
  price: number,
  discountPercentage?: number
) =>
  !discountPercentage
    ? ''
    : formatCurrency(price - (price * discountPercentage) / 100);
