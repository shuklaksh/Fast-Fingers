import React, { useState } from 'react'
import keyboard from '../../assets/images/keyBoard.svg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Welcome.css'

function Welcome({onSubmit}) {

  const[name,setName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <div className='welcome-user-page'>
      <div className="header">
        <div className="main-image">          
          <img src={keyboard} />
        </div>
        <p className="heading">Fast Fingers</p>
        <div className="sub-heading">
          <p className="sub-line">The Ultimate Typing Game</p>
        </div>
      </div>

      <form className="form-data" onSubmit={handleFormSubmit}>
        <div className="form-field">
          <input
            type="text"
            placeholder="TYPE YOUR NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <select
            className="select"
            type="text"
            autoComplete="off"
            name="level"
          >
            <option className="option" value="">
              DIFFICULTY LEVEL
            </option>
            <option className="option" value="Easy">
              Easy
            </option>
            <option className="option" value="Medium">
              Medium
            </option>
            <option className="option" value="Hard">
              Hard
            </option>
          </select>
        </div>
        <button className="start-game" type="submit">
          <PlayArrowIcon />
          <div className="start-btn">START GAME</div>
        </button>
      </form>

      
    </div>
  )
}

export default Welcome
