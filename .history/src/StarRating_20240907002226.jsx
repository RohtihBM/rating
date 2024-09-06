import React from "react";
import { useState } from "react";
import "./style.css";
const StarRating = ({ count = 10 }) => {
  const [starRating, setStarRating] = useState();
  const [hover, setHover] = useState();
  return (
    <div>
      {new Array(count).fill(0).map((value, index) => {
        return (
          <span
            key={index}
            className={
              (hover == 0 && index < (starRating) || index < hover ? "gold" : ""
            }
            onClick={() => setStarRating(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
