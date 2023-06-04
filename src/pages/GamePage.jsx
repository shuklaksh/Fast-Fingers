import {useState, useEffect} from 'react'
import Game from '../components/gamePage/Game'
import GameWord from '../data/GameWord';
import EndGame from './EndGame';

function GamePage({user}) {
  const [gameWord, setGameWord] = useState("");
  const [game,setGame] = useState(true);
 

  useEffect(() => {
    setGameWord(GameWord(user.level).toUpperCase());
    setGame(true);
  },[])

  const quitGame = () => {
    setGame(false);
  }
  
 
  return (
    <div className='game-page'>
    {game ? ( 
      <Game 
      user={user}
      word={gameWord}
      quitGame = {quitGame}
      /> ) : <EndGame user={user}/>
      }
      
    </div>
  )
}

export default GamePage
