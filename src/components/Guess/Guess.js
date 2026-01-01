import React from "react";

function Guess({ value }) {
  return (
    <p className="guess">
      {Array(5)
        .fill()
        .map((_, index) => (
          <span key={index} className="cell">
            {value ? value[index] : undefined}
          </span>
        ))}
    </p>
  );
}

export default Guess;
