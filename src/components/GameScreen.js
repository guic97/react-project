import "./GameScreen.css";

const GameScreen = ({processGame}) => {
  return (
    <div className="gameScreenGame">
      <p className="gameScreenPoints">
        <span>Points: 000</span>
      </p>
      <h2>Guess the word</h2>
      <div className="gameScreenLetterContainer">
        <span className="gameScreenLetter">A</span>
        <span className="gameScreenBlank" type="text" />
      </div>
      <p className="gameScreenTip">
        Tip: <span>something</span>
      </p>
      <div className="gameScreenWordContainer">
        <p>Put the letter:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Guess</button>
        </form>
      </div>
      <div className="gameScreenTriedLetters">
        <p>Letters tried:</p>
        <span>l, m, z</span>
      </div>
      
      
    </div>
  )
}

export default GameScreen;