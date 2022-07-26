import React, { FC } from 'react'
import { useStatusGame } from '../../hooks/useStatusGame'

const Card:FC = () => {
    let start = useStatusGame();
    console.log(start);

  return (
    <div>
        <h1>Welcom to countries quizz game!</h1>
        <button>Start</button>
    </div>
  )
}

export default Card
