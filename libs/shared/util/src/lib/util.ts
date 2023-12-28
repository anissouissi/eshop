export const formatCurrency = (value?: number) => {
  if (!value) {
    return '';
  }
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const getDiscountedPrice = (
  price?: number,
  discountPercentage?: number
) => {
  if (!discountPercentage || !price) {
    return '';
  }

  return formatCurrency(price - (price * discountPercentage) / 100);
};

export const getInitials = (fullName: string) => {
  const allNames = fullName.trim().split(' ');
  const initials = allNames.reduce((acc, curr, index) => {
    if (index === 0 || index === allNames.length - 1) {
      acc = `${acc}${curr.charAt(0).toUpperCase()}`;
    }
    return acc;
  }, '');
  return initials;
};
