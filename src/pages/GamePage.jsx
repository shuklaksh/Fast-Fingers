import React from 'react'
import Game from '../components/gamePage/Game'

function GamePage({user}) {
  return (
    <div className='game-page'>
      <Game user={user}/>
    </div>
  )
}

export default GamePage
