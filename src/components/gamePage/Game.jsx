import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Timer from './Timer';
import "./Game.css"

function Game({user}) {
  return (
    <div className='game-page-container'>

      <div className="left-bar">
        <div className="score-board">
          <div className="score-heading">SCORE BOARD</div>
          <div className="scores">pastScores</div>
        </div>
        <button className="stop-game" >
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
              SCORE: 0:00
            </div>
          </div>
        </div>
        <div className="main-game">
          <Timer />  
          <div className="game-word">
          </div>
          <div className="input-word">
              <input
                type="text"
                autoComplete="off"
                name="inputWord"
              />
            </div> 
        </div>
        
      </div>
    </div>

    
  )
}

export default Game
