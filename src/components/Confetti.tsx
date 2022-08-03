import { ConfettiProps, WindowDimensions } from '@/types/types';
import { FC } from 'react'
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const Confetti: FC<ConfettiProps> = ({isCorrect}) => {
    const { width, height }: WindowDimensions = useWindowSize();

  return (
    isCorrect ? (<ReactConfetti width={width} height={height}  gravity={0.5}/> ) : null
  )
}

export default Confetti;