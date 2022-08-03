import React, { FC } from 'react'
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';

interface ConfettiProps {
    isCorrect: boolean;
}

interface WindowDimensions {
    width: number;
    height: number;
  }

const Confetti: FC<ConfettiProps> = ({isCorrect}) => {
    const { width, height }: WindowDimensions = useWindowSize();

  return (
    isCorrect? <ReactConfetti width={width} height={height}/> : null
  )
}

export default Confetti;