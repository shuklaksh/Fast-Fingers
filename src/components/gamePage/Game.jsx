import {useState, useEffect} from 'react'
import PersonIcon from '@mui/icons-material/Person';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Timer from './Timer';
import "./Game.css"

function Game({user,word,score,incrementScore,scoreArray,gameCount,quitGame,isCorrect,changeWord}) {
  const [inputWord, setInputWord] = useState("");
  const [time,setTime] = useState();
  const[timePassed,setTimePassed] = useState(0);
  const [highScores,setHighScores] = useState(scoreArray)

  const handleInputChange = (e) => {
    setInputWord(e.target.value);
   if(isCorrect(e.target.value)) {
    changeWord();
    incrementScore();
    setInputWord('');
   }
      
  }
  
  useEffect(() =>{
    if(user.level === 'Easy') {
      setTime(3.99);
    } else if (user.level === 'Medium') {
      setTime(4.99);
    } else {
      setTime(5.99)
    }
  },[]);

  useEffect(() => {
    setTimePassed(0);
    return () => {
      setTimePassed(0);
    };
  }, [word]);


  useEffect(() => {
    let x = setInterval(() => {
      setTimePassed(timePassed + 0.01);
    }, 10);
    return () => clearInterval(x);

  },[timePassed]);

  if ((time - timePassed) <= 0) {
    console.log("hui")
    quitGame();
    
    
  }
  highScores.sort(function(a, b){return b-a});

  return (
    <div className='game-page-container'>

      <div className="left-bar">
        <div className="score-board">
          <div className="score-heading">HIGHEST SCORES</div>
          <ul className="highScore">
          {
            highScores && highScores.map((scoreVal) => {
              return ( <li className="scores">{scoreVal}</li>)
            })
          }
          </ul>
         
        </div>
        <button className="stop-game" onClick={quitGame}>
          <div className="stop-quitGame">STOP GAME</div>
        </button>
      </div>

      <div className="game-bar">
        <div className="game-header">
          <div className="userInfo">
            <div className="card">
              <PersonIcon />
              <div className="card-text">{user.name}</div>
            </div>
            <div className="card">
              <VideogameAssetIcon />
              <div className="card-text">{user.level}</div>
            </div>
          </div>
          <div className="userInfo">
            <div className="card">
              <KeyboardIcon />
              <div className="card-text">fast fingers</div>
            </div>
            <div className="card" style={{ fontWeight: 600 }}>
              SCORE: {score}
            </div>
          </div>
        </div>
        <div className="main-game">
          <Timer 
          word={word} 
          time={time - timePassed}
          timePassed={timePassed}

          />  
          <div className="game-word">
          <p>
              {word.split("").map((char, i) => {
                let color;

                if (i < inputWord.length) {
                  if (char === inputWord.charAt(i).toUpperCase()) {
                    color = "var(--bkg-color, #1d3557)";
                  } else {
                    color = "#e63946";
                  }
                }
                return (
                  <span key={i} style={{ color: color }}>
                    {char}
                  </span>
                );
              })}
            </p>
          </div>
          <div className="input-word">
              <input
                type="text"
                autoComplete="off"
                name="inputWord"
                value={inputWord}
                onChange={handleInputChange}
              />
            </div> 
        </div>
        
      </div>
    </div>

    
  )
}

export default Game
