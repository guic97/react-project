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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedLetters, setPickedLetters] = useState([]);

  const pickWordAndCategory = () =>{
    // Pick a random category
    const categories = Object.keys(words);
    const randomCategory = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    
    // Pick a random word
    const randomWord = words[randomCategory][Math.floor(Math.random() * words[randomCategory].length)];

    // Create a letters array
    let randomWordLetters = randomWord.split("");
    // Put it to lower case
    randomWordLetters = randomWordLetters.map((l) => l.toLowerCase());

    // Return to startGame()
    return { randomCategory, randomWord, randomWordLetters };
  }

  const startGame = () =>{

    // Get the data from pickWordAndCategory()
    const { randomCategory, randomWord, randomWordLetters } = pickWordAndCategory();

    // Fill states
    setPickedLetters(randomWordLetters);
    setPickedWord(randomWord);
    setPickedCategory(randomCategory);

    setGameStage(stages[1].name);

    console.log(randomCategory, randomWord, randomWordLetters);
  }
  const processGame = () =>{
    setGameStage(stages[2].name);
  }
  const retryGame = () =>{
    setGameStage(stages[0].name);
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
