import React from "react";
import { useState } from "react";
import "./style.css";
const StarRating = ({ count = 5 }) => {
  const [starRating, setStarRating] = useState();
  return (
    <div>
      {new Array(count).fill(0).map((value, index) => {
        return (
          <span
            key={index}
            className={index < starRating ? "gold" : ""}
            onClick={() => setStarRating(index + 1)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
