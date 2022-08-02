import React, { FC } from 'react'


interface ButtonProps {
    answer: string;
    handleClick: (answer: string) => void;
    isLoading: boolean;
}

const Button: FC<ButtonProps> = ({ answer, handleClick, isLoading }) => {

    if(isLoading) {
        return <></>
    }

    const handleAnswer = () => {
        handleClick(answer);
    }

  return (
    <button onClick={handleAnswer}>{answer}</button>
  )
}

export default Button;