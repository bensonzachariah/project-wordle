import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        disabled={gameStatus !== "running"}
        required
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
