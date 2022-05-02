import "./GameScreen.css";

import { useState, useRef } from "react";

const GameScreen = ({
    processGame,
    pickedCategory,
    pickedWord,
    pickedLetters,
    wrongLetters,
    guessedLetters,
    guesses,
    score,
  }) => {
  
  const [letter, setLetter] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    processGame(letter);

    setLetter("");
    // Focus to input
    inputRef.current.focus();
  }

  return (
    <div className="gameScreenGame">
      <p className="gameScreenPoints">
        <span>Points: {score}</span>
      </p>
      <h2>Guess the word</h2>
      <div className="gameScreenWordContainer">
        {pickedLetters.map((letter, l)=> (
          guessedLetters.includes(letter) ? (
            <span key={l} className="gameScreenLetter">{letter}</span>
          ):(
            <span key={l} className="gameScreenBlank" type="text"></span>
          )
        ))} 
      </div>
      <p className="gameScreenTip">
        Tip: <span>{pickedCategory}</span>
      </p>
      <p>
        {guesses} chances remain 
      </p>
      <div className="gameScreenLetterContainer">
        <p>Put the letter:</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="letter" 
            maxLength="1" 
            required 
            onChange={e => setLetter(e.target.value)} 
            value={letter}
            // Focus
            ref = {inputRef}
            />
          <button>Guess</button>
        </form>
      </div>
      <div className="gameScreenTriedLetters">
        <p>Letters tried:</p>
        {wrongLetters.map((letter, l) =>(
          <span key={l}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default GameScreen;