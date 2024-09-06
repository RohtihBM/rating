import React from "react";
import { useState } from "react";
const StarRating = ({ count = 5 }) => {
  const [starRating, setStarRating] = useState();
  return (
    <div>
      {new Array(count).fill(0).map(() => {
        return <span>&#9733;</span>;
      })}
    </div>
  );
};

export default StarRating;