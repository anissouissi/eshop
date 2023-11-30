export interface PriceProps {
  price: string;
  discountedPrice?: string;
}

export function Price({ price, discountedPrice }: PriceProps) {
  return (
    <div className="flex flex-col items-end">
      <div className={`${discountedPrice ? 'line-through' : ''} font-bold`}>
        {price}
      </div>
      {discountedPrice && <div className="font-bold">{discountedPrice}</div>}
    </div>
  );
}

export default Price;
