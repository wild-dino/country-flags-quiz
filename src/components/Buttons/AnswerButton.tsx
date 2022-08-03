import { FC, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

import { AnswerButtonProps, StyledButonProps } from "@/types/types";
import Button from "./Button";

const initialState = {
    active: false,
    answered: false,
};

const AnswerButton: FC<AnswerButtonProps> = ({
    answer,
    handleClick,
    correctAnswer,
}) => {
    const [{ active, answered }, setState] = useState(initialState);

    const clearState = () => {
        setState({ ...initialState });
    };

    useEffect(() => {
        clearState();
    }, [handleClick]);

    const handleAnswer = () => {
        if (!answered) {
            setState({ active: true, answered: true });
            setTimeout(() => {
                handleClick(answer, answered);
            }, 300);
        }
    };

    return (
        <Button onClick={handleAnswer}>
            <InnerButton
                active={active}
                correctAnswer={correctAnswer}
                answer={answer}
                answered={answered}
            ></InnerButton>
            {answer}
        </Button>
    );
};

export default AnswerButton;

export const InnerButton = styled.div<any>`
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0;
    border-radius: 5px;
    display: ${(props) => (props.answered ? "block" : "none")};
    background: ${(props) =>
        props.answer === props.correctAnswer
            ? "linear-gradient(to right, #56ab2f, #a8e063)"
            : "linear-gradient(90deg, #f41010,#ff2974)"};

    animation: ${(props) => changeBackgroundAnimation(props)};
`;

const changeBackground = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1 };
`;

const changeBackgroundAnimation = ({ active }: StyledButonProps) =>
    active &&
    css`
        ${changeBackground} 500ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both
    `;
