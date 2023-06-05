import {useState, useEffect} from 'react'
import Game from '../components/gamePage/Game'
import GameWord from '../data/GameWord';
import EndGame from './EndGame';
import wordSound from '../assets/audio/wordSound.wav';
import useSound from 'use-sound';

function GamePage({user}) {
  const [gameWord, setGameWord] = useState("");
  const [game,setGame] = useState(true);
  const [wordChangeAudio] = useSound(wordSound);
  const [score,setScore] = useState(0);
  const [scoreArray,setScoreArray] = useState([]);
  const [gameCount,setGameCount] = useState(0);
 

  useEffect(() => {
    setGameWord(GameWord(user.level).toUpperCase());
    setGame(true);
  },[])

  

  const quitGame = () => {
    setScoreArray([...scoreArray,score]);
    setGame(false);

  }

  const changeWord = () => {
    wordChangeAudio();
    const newWord = GameWord(user.level);
    setGameWord(newWord.toUpperCase());
  };
  const playAgain = () => {
    setGame(true);
    setScore(0);
    changeWord();
  };

  const isCorrect = (inputWord) => {
    if (gameWord === inputWord.toUpperCase()) {
     return true;
    } return false;
  };
  
 
  return (
    <div className='game-page'>
    {game ? ( 
      <Game 
      user={user}
      word={gameWord}
      score={score}
      gameCount={gameCount}
      incrementScore = {() => setScore(score+1)}
      scoreArray={scoreArray}
      quitGame = {quitGame}
      isCorrect = {isCorrect}
      changeWord = {() => changeWord()
      }
      /> ) : <EndGame user={user}  score={score} playAgain={() => playAgain()}/>
      }
      
    </div>
  )
}

export default GamePage
