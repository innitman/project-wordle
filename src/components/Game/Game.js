import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessWord from "../GuessWord";
import PreviousGuesses from "../PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousAttempts, setPreviousAttempts] = React.useState([]);

  return (
    <>
      <PreviousGuesses previousAttempts={previousAttempts}></PreviousGuesses>
      <GuessWord
        previousAttempts={previousAttempts}
        setPreviousAttempts={setPreviousAttempts}
      ></GuessWord>
    </>
  );
}

export default Game;
