import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Answers from "../Answers/Answers";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [answers, setAnswers] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  function handleSubmitGuess(guess) {
    const nextAnswer = [...answers, guess];
    setAnswers(nextAnswer);
    if (guess.toUpperCase() === answer) {
      console.log("won");
      setGameStatus("won");
    } else if (nextAnswer.length >= NUM_OF_GUESSES_ALLOWED) {
      console.log("lost");
      setGameStatus("lost");
    }
    if (guess.length !== 5) {
      window.alert("your guess should have exactly 5 letters!");
      return;
    }
  }
  return (
    <>
      <Answers
        answers={answers}
        correctAnswer={answer}
        setGameStatus={setGameStatus}
      />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === "won" && <HappyBanner numOfGuesses={answers.length} />}
      {gameStatus === "lost" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
