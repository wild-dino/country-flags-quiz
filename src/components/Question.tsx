import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "@/hooks/redux";
import { useActions } from "@/hooks/useActions";
import { useQuestions } from "@/hooks/useQuestions";
import Button from "./Button";
import Confetti from "./Confetti";
import { Modal } from "./Modal";

const initialState = {
    isCorrect: false,
    hasAnswered: false
}

const Question: FC = () => {
    const questions = useQuestions(10);
    const { updateQuiz, setGameStatus } = useActions();
    const isLoading = useAppSelector((state) => state.countries.isLoading);
    let {score} = useAppSelector((state) => state.game);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [{isCorrect, hasAnswered}, setState] = useState(initialState);

    console.log(questions);

    const clearState = () => {
        setState({...initialState});
    };

    const handleClick = (answer: string, hasAnswered: boolean): void => {
        if (!hasAnswered) {
            currQuestion === 9
            ? setGameStatus("end")
            : updateQuiz({
                  hasAnswered: true,
                  correctAnswer: questions[currQuestion].correctAnswer,
                  isCorrect:
                      answer === questions[currQuestion].correctAnswer
                          ? true
                          : false,
              });
            setState({...initialState, isCorrect: questions[currQuestion].correctAnswer === answer, hasAnswered: hasAnswered});
        }
    };

    const handleNext = () : void => {
        setCurrQuestion(prevQuestion => prevQuestion + 1);
        clearState();
    }

    if (isLoading) {
        return <h1>Creating questions... ^_^</h1>;
    }

    return (
        <StyledQuestion>
            <StyledScoreBoard>{score}</StyledScoreBoard>
            <ImgWrapper>
                <StyledImg src={questions[currQuestion].flag} />
            </ImgWrapper>
            <Modal handleNext={handleNext} isCorrect={isCorrect} correctAnswer={questions[currQuestion].correctAnswer} />
            <Confetti isCorrect={isCorrect}  />
            <StyledRowButton>
                {questions[currQuestion].answers?.map(
                    (answer: string, id: number): JSX.Element => (
                        <Button
                            key={id}
                            handleClick={handleClick}
                            answer={answer}
                            correctAnswer={
                                questions[currQuestion].correctAnswer
                            }
                            hasAnswered={hasAnswered}
                        />
                    )
                )}
                <button onClick={handleNext}>Next question</button>
            </StyledRowButton>
        </StyledQuestion>
    );
};

export default Question;

const StyledQuestion = styled.div`
    min-width: 30vw;
    max-height: 100vh;
    display: grid;
    grid-gap: 10px;
    grid-template-rows: repeat(1fr 3fr 2fr);
    grid-template-areas:
        "score"
        "flag"
        "buttonRow";
`;

const StyledScoreBoard = styled.div`
    grid-area: score;
    align-self: center;
`;

const ImgWrapper = styled.div`
    grid-area: flag;
    align-self: center;
    display: inline-block;
    overflow: hidden;
    width: 100%;
    padding-bottom: 80%;
    height: 0;
    position: relative;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: contain;
`;

const StyledRowButton = styled.div`
    align-self: center;
    grid-area: buttonRow;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;
`;
