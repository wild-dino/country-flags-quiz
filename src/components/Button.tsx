import { useAppSelector } from "@/hooks/redux";
import React, { FC, useState } from "react";
import styled, { css, keyframes } from "styled-components";

interface ButtonProps {
    answer: string;
    handleClick: (answer: string) => void;
    isLoading: boolean;
    correctAnswer: string;
}

interface StyledButonProps {
    active: boolean;
    correctAnswer: string;
    answer: string;
    answered: boolean;
}

const Button: FC<ButtonProps> = ({
    answer,
    handleClick,
    isLoading,
    correctAnswer,
}) => {
    const [active, setActive] = useState(false);
    const [answered, setAnswered] = useState(false);

    console.log(active);

    if (isLoading) {
        return <></>;
    }

    const handleAnswer = () => {
        setActive(true);
        setAnswered(true);
        handleClick(answer);

    };

    return (
        <StyledButton onClick={handleAnswer} active={active}
        correctAnswer={correctAnswer}
        answer={answer}
        answered={answered}>
              {answer}
            <InnerButton
                active={active}
                correctAnswer={correctAnswer}
                answer={answer}
                answered={answered}
            >
            </InnerButton>
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button<StyledButonProps>`
    z-index: 1;
    position: relative;
    width: 100%;
    min-width: 200px;
    min-height: 30px;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    font-weight: bold;
    border-radius: 5px;
    border: 0;
    padding: 0;
`;

const changeBackground = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1 };
`;

export const InnerButton = styled.div<StyledButonProps>`
    display: ${(props) => props.answered ? "block" : "none"};
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: 100%;
    border-radius: 5px;
    width: 100%;
    background: ${(props) =>
       props.answer === props.correctAnswer? "linear-gradient(to right, #56ab2f, #a8e063)"
            : "linear-gradient(to right, #ff512f, #dd2476)"};
    animation: ${(props) =>
        changeBackgroundAnimation(
            props as { active: boolean; answer: string; correctAnswer: string; answered: boolean }
        )};
`;

const changeBackgroundAnimation = ({
    active,
    answer,
    correctAnswer,
    answered
}: StyledButonProps) =>
    active &&
    css`
        ${changeBackground} 1.38s cubic-bezier(0.36, 0.07, 0.19, 0.97) both
    `;
