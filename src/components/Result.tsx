import { useAppSelector } from "@/hooks/redux";
import { useActions } from "@/hooks/useActions";
import styled from "styled-components";
import { WrapperContainer, StyledImg } from "@/styles/globalStyle";
import Button from "./Buttons/Button";
import highFive from "@/assets/1x/endImg.png";

const Result = () => {
    let totalScore = useAppSelector((state) => state.quiz.score);
    const { resetQuiz } = useActions();

    const handleReset = () => {
        resetQuiz();
    };

    return (
        <RezultStyled>
            <WrapperContainer>
                <StyledImg src={highFive} />
            </WrapperContainer>
            <TotalScore> Your total score: {totalScore} </TotalScore>
            <Button onClick={handleReset}>Try again!</Button>
        </RezultStyled>
    );
};

export default Result;

const RezultStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
`;

const TotalScore = styled.h1`
    font-size: 35px;
`;
