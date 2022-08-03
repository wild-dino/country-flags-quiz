import { useAppSelector } from "@/hooks/redux";
import React, { FC, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

interface ButtonProps {
    answer: string;
    handleClick: (answer: string, hasAnswered: boolean ) => void;
    correctAnswer: string;
    hasAnswered: boolean;
}

interface StyledButonProps {
    active: boolean;
    correctAnswer: string;
    answer: string;
    answered?: boolean;
}

const initialState = {
    active: false,
    answered: false,
};

const Button: FC<ButtonProps> = ({ answer, handleClick, correctAnswer, hasAnswered }) => {
    const [{ active, answered}, setState] = useState(initialState);

    const clearState = () => {
        setState({ ...initialState });
    };

    useEffect(() => {
        clearState();
    }, [handleClick]);

    const handleAnswer = () => {
        if (!answered) {
            setState({ active: true, answered: true});
            setTimeout(() => {
                handleClick(answer, answered);
            }, 1000);
        }
    };

    return (
        <StyledButton
            onClick={handleAnswer}
            active={active}
            correctAnswer={correctAnswer}
            answer={answer}
            answered={answered}
        >
            <InnerButton
                active={active}
                correctAnswer={correctAnswer}
                answer={answer}
                answered={answered}
            ></InnerButton>
            {answer}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button<StyledButonProps>`
    min-height: 40px;
    position: relative;
    z-index: 1;
    min-width: 200px;
    cursor: pointer;
    transition: 0.1s all ease-in-out;
    font-weight: bold;
    border-radius: 5px;
    background: #b02bee;
    border: 0;
`;

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

    animation: ${(props) =>
        changeBackgroundAnimation(
            props as {
                active: boolean;
                answer: string;
                correctAnswer: string;
                answered: boolean;
            }
        )};
`;

const changeBackground = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1 };
`;

const changeBackgroundAnimation = ({
    active,
    answer,
    correctAnswer,
}: StyledButonProps) =>
    active &&
    css`
        ${changeBackground} 500ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both
    `;
