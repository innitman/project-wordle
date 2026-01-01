import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessWord({ previousAttempts, setPreviousAttempts }) {
  const [attempt, setAttempt] = React.useState("");
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const nextAttempts = [...previousAttempts, attempt];
          setPreviousAttempts(nextAttempts);
          setAttempt("");
        }}
        className="guess-input-wrapper"
      >
        <label htmlFor="guess-input">Enter guess (5 letters):</label>
        <input
          required
          id="guess-input"
          type="text"
          value={attempt}
          pattern="^[A-Za-z]{5}$"
          title="5 letter word"
          onChange={(event) => {
            if (previousAttempts.length < NUM_OF_GUESSES_ALLOWED) {
              setAttempt(event.target.value.toUpperCase());
            } else {
              window.alert("6 guesses done");
            }
          }}
        />
      </form>
    </>
  );
}

export default GuessWord;
