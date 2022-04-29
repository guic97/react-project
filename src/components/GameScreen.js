import "./GameScreen.css";

const GameScreen = ({processGame}) => {
  return (
    <div>
      <h2>GameScreen</h2>
      <button onClick={processGame}>Quit game</button>
    </div>
  )
}

export default GameScreen;