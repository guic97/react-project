// CSS
import './App.css';

// Hooks..., etc.
import { useState, useEffect, useCallback } from 'react';

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

  const [guessedLetters, setGuessedLetters] = useState("");
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);


  const pickWordAndCategory = useCallback(() =>{
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
  },[words]);

  const startGame = () =>{
    // Reset
    setGuessedLetters([])
    setWrongLetters([])
    // Get the data from pickWordAndCategory()
    const { randomCategory, randomWord, randomWordLetters } = pickWordAndCategory();

    // Fill states
    setPickedLetters(randomWordLetters);
    setPickedWord(randomWord);
    setPickedCategory(randomCategory);
    
    setGameStage(stages[1].name);
  };
  const processGame = (letter) =>{
    letter = letter.toLowerCase();
    if (guessedLetters.includes(letter) ||
        wrongLetters.includes(letter)
      ){
        return;
      }
    // Validation if its on or not
    // It is on
    if(pickedLetters.includes(letter)){
      setGuessedLetters((newGuessedLetters)=>[
        ...newGuessedLetters, letter, 
      ]);
    } 
    // is not
    else{
      setWrongLetters((newWrongLetters)=>[
        ...newWrongLetters, letter, 
      ]);

      setGuesses(guesses-1)
    }
  }
  useEffect(()=>{
    if(guesses <= 0){
      setGameStage(stages[2].name)

      // Reset 
      setGuessedLetters([])
      setWrongLetters([])
      setGuesses(3)
    }
  }, [guesses]);

  useEffect(()=>{
    const duplicateLetters = [...new Set(pickedLetters)];
    
    // Win
    if((guessedLetters.length !== 0) && (guessedLetters.length === duplicateLetters.length)){
      // Score
      setScore(score+50);
      startGame();
    }
  }, [guessedLetters]);

  const retryGame = () =>{
    setGameStage(stages[0].name);
  }
  return (
  <div className='app'>
    {gameStage === "start" && <StartScreen startGame={startGame} />}
    {gameStage === "game" && 
      <GameScreen 
        processGame={processGame}
        pickedCategory = {pickedCategory}
        pickedWord = {pickedWord}
        pickedLetters = {pickedLetters}
        wrongLetters = {wrongLetters}
        guessedLetters = {guessedLetters}
        guesses = {guesses}
        score = {score}
        
      />}
    {gameStage === "end" && <EndScreen retryGame={retryGame} score={score}/>}
  </div>
  );
}

export default App;
