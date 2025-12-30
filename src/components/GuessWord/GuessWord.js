import React from "react";

function GuessWord({ attempt, setAttempt }) {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(attempt);
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
          onChange={(event) => setAttempt(event.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default GuessWord;
