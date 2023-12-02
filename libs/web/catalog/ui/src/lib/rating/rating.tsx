export interface RatingProps {
  rating?: number;
}

function RatingItem({ index, checked }: { index: number; checked: boolean }) {
  return (
    <input
      readOnly
      type="radio"
      name="rating"
      disabled
      className={`bg-orange-400 mask mask-star-2 ${
        index === 1 ? 'mask-half-1' : 'mask-half-2'
      }`}
      checked={checked}
    />
  );
}

export function Rating({ rating = 0 }: RatingProps) {
  return (
    <div className="rating rating-sm rating-half">
      <input
        readOnly
        type="radio"
        name="rating"
        disabled
        checked={rating === 0}
        className="-mr-2 rating-hidden"
      />
      {[...Array(10).keys()].map((i) => {
        return (
          <RatingItem
            key={i}
            index={i % 2 === 0 ? 1 : 2}
            checked={rating > 0 && rating > i / 2 && rating <= (i + 1) / 2}
          />
        );
      })}
    </div>
  );
}

export default Rating;
