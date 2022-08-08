import React, { FC } from "react";
import { useActions } from "@/hooks/useActions";
import Button from "./Buttons/Button";
import styled from "styled-components";
import { StyledImg, WrapperContainer } from "@/styles/globalStyle";
import image from "@/assets/StartingPage/startImg.svg";

const Greeting: FC = () => {
    const { setQuizStatus } = useActions();

    const statusHandler = () => {
        setQuizStatus("quiz");
    };

    return (
        <StyledGreeting>
            <WrapperContainer>
                <StyledImg src={image} />
            </WrapperContainer>
            <Caption>Welcome to the country flags quiz!</Caption>
            <Button onClick={statusHandler}>Start</Button>
        </StyledGreeting>
    );
};

export default Greeting;

const StyledGreeting = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
`;
const Caption = styled.h1`
    font-size: 35px;
`;
