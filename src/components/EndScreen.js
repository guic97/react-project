import "./EndScreen.css"

const EndScreen = ({retryGame}) => {
  return (
    <div>
      <h2>EndScreen</h2>
      <button onClick={retryGame}>Retry</button>
    </div>
  )
}

export default EndScreen