import React, { FC } from 'react'


interface ButtonProps {
    answer: string;
    handleClick: (answer: string) => void
}

const Button: FC<ButtonProps> = ({ answer, handleClick }) => {

    console.log('render')

    const handleAnswer = () => {
        handleClick(answer);
    }

  return (
    <button onClick={handleAnswer}>{answer}</button>
  )
}

export default Button;