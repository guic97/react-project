import "./StartScreen.css";
//rafce
const StartScreen = ({startGame}) => {
  return (
    <div className="startScreenContainer">
      <h2>Guess the word!!</h2>
      <p>Click to start!</p>
      <button onClick={startGame}>Start</button>
    </div>
  )
}

export default StartScreen;
