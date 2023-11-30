export interface DiscountProps {
  discountPercentage?: number;
}

export function Discount({ discountPercentage = 0 }: DiscountProps) {
  return (
    discountPercentage > 0 && (
      <div className="bg-red-600 text-base-200 p-2">{`${discountPercentage}% off`}</div>
    )
  );
}

export default Discount;
