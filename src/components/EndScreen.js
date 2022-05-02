import "./EndScreen.css"

const EndScreen = ({retryGame, score}) => {
  return (
    <div>
      <h2>Game over!</h2>
      <h3>Score: <span>{score}</span></h3>
      <button onClick={retryGame}>Retry</button>
    </div>
  )
}

export default EndScreen