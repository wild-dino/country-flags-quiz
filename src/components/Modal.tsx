import { FC } from "react";
import {animated, config, useSpring } from "react-spring";
import styled from "styled-components";

interface ModalProps {
    correctAnswer: boolean;
    isCorrect: boolean;
    handleNext: () => void;
}

const Modal: FC<ModalProps> = ({correctAnswer, isCorrect, handleNext}) => {

    const style = useSpring({
    delay: 700,
    config: config.gentle,
    from: { transform: `scale(0)` },
    to: {
      transform: !isCorrect? `scale(1)` : `scale(0)`
    }
  });

    return (
    <StyledModal style={style}>
        <Answer>{correctAnswer}</Answer>
        <button onClick={handleNext}></button>
    </StyledModal>
    );
};

export default Modal;

const StyledModal = styled(animated.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Answer = styled.div`
    display: flex;
`


