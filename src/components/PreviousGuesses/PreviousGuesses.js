import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function PreviousGuesses({ previousAttempts }) {
  return (
    <div className="guess-results">
      {previousAttempts.map((attempt, index) => (
        <p key={index} className="guess">
          {[...attempt].map((character, index) => {
            return (
              <span key={index} className="cell">
                {character}
              </span>
            );
          })}
        </p>
      ))}
      {Array(NUM_OF_GUESSES_ALLOWED - previousAttempts.length)
        .fill()
        .map((_, rowIndex) => (
          <p key={rowIndex} className="guess">
            {Array(5)
              .fill()
              .map((_, index) => (
                <span key={index} className="cell"></span>
              ))}
          </p>
        ))}
    </div>
  );
}

export default PreviousGuesses;
