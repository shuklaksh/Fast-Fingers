import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <div className="app">
      <HomePage />
    </div>
  )
}

export default App
