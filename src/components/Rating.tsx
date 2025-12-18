import { useState } from "react";
import clsx from "clsx";

const Rating = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <div className="h-screen flex justify-center items-center text-6xl">
      {Array.from({ length: 5 }, (_, index) => {
        const isActive = index < (hover || rating);
        return (
          <span
            key={index}
            className={clsx(
              "cursor-pointer transition-colors duration-200",
              isActive ? "color" : "noColor"
            )}
            onClick={() => setRating(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
