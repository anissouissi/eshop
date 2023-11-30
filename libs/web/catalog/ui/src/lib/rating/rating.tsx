export interface RatingProps {
  rating?: number;
}

export function Rating({ rating = 0 }: RatingProps) {
  return (
    <div className="rating rating-sm rating-half">
      <input
        readOnly={true}
        type="radio"
        name="rating"
        disabled
        checked={rating === 0}
        className="-mr-2 rating-hidden"
      />
      {[...Array(10).keys()].map((i) => {
        return (
          <input
            readOnly={true}
            key={i}
            type="radio"
            name="rating"
            disabled
            className={`bg-orange-400 mask mask-star-2 mask-half-${
              i % 2 === 0 ? 1 : 2
            }`}
            checked={rating > 0 && rating > i / 2 && rating <= (i + 1) / 2}
          />
        );
      })}
    </div>
  );
}

export default Rating;
