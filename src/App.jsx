import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

function App() {
  const[user,setUser] = useState({name:'',level: "Easy"});
  const[isLoggedIn,setIsLoggedIn] = useState(false);

  const handleThemeChange = (e) => {
    switch (e.target.value) {
      case "Light":
        root.style.setProperty("--bkg-color", "#1d3557");
        root.style.setProperty("--box-bkg", "#f1faee");
        root.style.setProperty("--img-color", "#1d3557");
        root.style.setProperty("--text-type1", "#1d3557");
        root.style.setProperty("--text-type2", "#457b9d");
        root.style.setProperty("--input-type1", "#f1faee");
        break;
      case "Dark":
        root.style.setProperty("--bkg-color", "#cad2c5");
        root.style.setProperty("--box-bkg", "#2f3e46");
        root.style.setProperty("--img-color", "#cad2c5");
        root.style.setProperty("--text-type1", "#cad2c5");
        root.style.setProperty("--text-type2", "#84a98c");
        root.style.setProperty("--input-type1", "#2f3e46");
    }
  };

  const changeLoginState = () => {
    setIsLoggedIn(true);
  }

  const changeUser = (newUser) => {
    setUser(newUser);
    console.log(newUser);
  }


  
  return (
    <div className="app">
     <select
        className="theme-switcher"
        type="text"
        autoComplete="off"
        name="theme"
        onChange={handleThemeChange}
      >
        <option className="option" value="">
          Change Theme
        </option>
        <option className="option" value="Light">
          Light
        </option>
        <option className="option" value="Dark">
          Dark
        </option>
      </select>
      {
        isLoggedIn ? <GamePage /> : 
        (
          <HomePage 
              changeUser={changeUser}
              changeLoginState = {changeLoginState} 
              handleThemeChange={handleThemeChange}
            />
        )
      }
    </div>
  )
}

export default App
