import React from "react";
import { useState } from "react";
import "./style.css";
const StarRating = ({ count = 5 }) => {
  const [starRating, setStarRating] = useState();
  const [hover, setHover] = useState();
  return (
    <div>
      {new Array(count).fill(0).map((value, index) => {
        return (
          <span
            key={index}
            className={index < starRating || index < hover ? "gold" : ""}
            onClick={() => setStarRating(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => (className = "")}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
