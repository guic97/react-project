// CSS
import './App.css';

// Hooks..., etc.
import { useState } from 'react';

// Data
import { Words } from "../src/data/Words";

// Components
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

function App() {

  const stages = [
    {id: 1, name:"start"},
    {id: 2, name:"game"},
    {id: 3, name:"end"},
  ];
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(Words);

  const startGame = () =>{
    setGameStage(stages[1].name)
  }
  const processGame = () =>{
    setGameStage(stages[2].name)
  }
  const retryGame = () =>{
    setGameStage(stages[0].name)
  }

  return (
  <div className='app'>
    {gameStage === "start" && <StartScreen startGame={startGame} />}
    {gameStage === "game" && <GameScreen processGame={processGame} />}
    {gameStage === "end" && <EndScreen retryGame={retryGame} />}
  </div>
  );
}

export default App;
