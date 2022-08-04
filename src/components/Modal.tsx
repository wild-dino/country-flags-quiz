import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";
import { FC } from "react";
import { ModalProps } from "@/types/types";

import Button from "./Buttons/Button";

const Modal: FC<ModalProps> = ({
    correctAnswer,
    isCorrect,
    hasAnswered,
    handleNext,
}) => {

    const style = useSpring({
        delay: 500,
        config: config.gentle,
        from: { transform: `scale(0)` },
        to: {
            transform: `scale(1)`,
        },
    });

    return hasAnswered ? (
        <Background>
            <Centered>
                <StyledModal style={style}>
                    <Answer>
                        {isCorrect
                            ? "Great!!"
                            : `The answer is ${correctAnswer}!`}
                    </Answer>
                    <Button onClick={handleNext}>Next country</Button>
                </StyledModal>
            </Centered>
        </Background>
    ) : null;
};

export default Modal;

const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    top: 50%;
    left: 50%;
    background-color: rgba(0, 0, 0, 0.7);
    transform: translate(-50%, -50%);
`;

const Centered = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledModal = styled(animated.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 2rem;
    border-radius: 15px;
    opacity: 0.9;
    z-index: 3;
    background: #d5e1df;
`;

const Answer = styled.div`
    text-align: center;
    color: #150632;
    font-weight: bold;
    margin: 10%;
    padding: 0 1rem;
    width: 60%;
    minwidth: 200px;
`;
