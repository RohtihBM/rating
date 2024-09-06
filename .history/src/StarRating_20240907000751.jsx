import React from "react";
import { useState } from "react";
const StarRating = ({ count = 5 }) => {
  const [starRating, setStarRating] = useState();
  return (
    <div>
      {new Array(count).fill(0).map((value, index) => {
        return (
          <span key={index} onClick={() => setStarRating(index)}>
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
