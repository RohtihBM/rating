import React from "react";

const App = ({ count = 5 }) => {
  return (
    <div>
      {new Array(count).fill(0).map((value, index) => {
        return <span key={index}>&#9733;</span>;
      })}
    </div>
  );
};

export default App;
