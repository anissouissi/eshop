export interface AvailabilityProps {
  stock?: number;
}

export function Availability({ stock }: AvailabilityProps) {
  if (!stock || stock < 0) {
    return <div className="text-red-600 font-bold">Sold out</div>;
  }
  if (stock > 0 && stock <= 10) {
    return <div className="text-orange-400 font-bold">Sold out soon</div>;
  }
  return <div className="text-green-700 font-bold">In stock</div>;
}

export default Availability;
