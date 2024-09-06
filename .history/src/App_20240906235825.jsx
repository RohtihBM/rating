import React from "react";

const App = ({ count = 5 }) => {
  const [starValue, setStarValue] = useState();
  return (
    <div>
      {new Array(count).fill(0).map((value, index) => {
        return (
          <span
            key={index}
            onClick={() => setStarValue(index)}
            className={index < starValue ? "gold" : ""}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default App;