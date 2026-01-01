import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const checked = checkGuess(value, answer);
  return (
    <p className="guess">
      {Array(5)
        .fill()
        .map((_, index) => {
          const status = value ? checked[index].status : "";
          return (
            <span key={index} className={`cell ${status}`}>
              {value ? value[index] : undefined}
            </span>
          );
        })}
    </p>
  );
}

export default Guess;
