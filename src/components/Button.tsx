import React, { FC } from 'react'


interface ButtonProps {
    answer: string;
    correctAnswer: string;
    id: number;
    handleClick: (answer: string) => void
}

const Button: FC<ButtonProps> = ({ answer, correctAnswer, id, handleClick }) => {

    const handleAnswer = () => {
        handleClick(answer);
    }

  return (
    <button onClick={handleAnswer}>{answer}</button>
  )
}

export default Button;