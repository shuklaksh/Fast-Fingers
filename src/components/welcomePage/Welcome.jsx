import React, { useState } from 'react'
import keyboard from '../../assets/images/keyBoard.svg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import useSound from 'use-sound';
import errorSound from '../../assets/audio/errorSound.wav';
import './Welcome.css'

function Welcome({user,changeUser, changeLoginState}) {
  const [name,setName] = useState('');
  const [level,setLevel] = useState(user.level);
  const[error] = useSound(errorSound);
  const[isNameError,setIsNameError] = useState(false)
  const[isLevelError,setIsLevelError] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(name ==='') {
      error();
      setIsNameError(true);
    } else if(level === "") {
      error();
      setIsNameError(false);
      setIsLevelError(true);
    }
     else {
      const newUser = {
        "name" : name,
        "level": level
      }
      changeUser(newUser);

      setIsNameError(false);
      setIsLevelError(false);
      changeLoginState();
    }
   
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
        {isNameError ? (<p className='error'>Please enter the name</p>) : ""}
        <div className="form-field">
          <select
            className="select"
            type="text"
            autoComplete="off"
            name="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
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
          {isLevelError ? (<p className='error'>Please enter the Level</p>) : ""}
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
