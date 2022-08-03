import { FC, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "@/hooks/redux";
import { useActions } from "@/hooks/useActions";
import { useQuestions } from "@/hooks/useQuestions";
import Confetti from "./Confetti";
import Modal from "./Modal";
import AnswerButton from "./Buttons/AnswerButton";

const initialState = {
    isCorrect: false,
    hasAnswered: false,
};

const Question: FC = () => {
    const questions = useQuestions(10);
    const { updateQuiz, setQuizStatus } = useActions();

    const isLoading = useAppSelector((state) => state.countries.isLoading);
    let { score } = useAppSelector((state) => state.game);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [{ isCorrect, hasAnswered }, setState] = useState(initialState);

    const clearState = () => {
        setState({ ...initialState });
    };

    const handleClick = (answer: string, hasAnswered: boolean): void => {
        if (!hasAnswered) {
            updateQuiz({
                isCorrect:
                    answer === questions[currQuestion].correctAnswer
                        ? true
                        : false,
            });
            setState({
                ...initialState,
                isCorrect: questions[currQuestion].correctAnswer === answer,
                hasAnswered: true,
            });
        }
    };

    const handleNext = (): void => {
        setCurrQuestion((prevQuestion) => prevQuestion + 1);
        currQuestion === 9 && setQuizStatus("end");
        clearState();
    };

    if (isLoading) {
        return <h1>Creating questions... ^_^</h1>;
    }

    return (
        <StyledQuestion>
            <StyledBoardInfo>
                <Score>Your score: {score}</Score>
                <QuestionNum>question: {currQuestion + 1}/10</QuestionNum>
            </StyledBoardInfo>
            <ImgWrapper>
                <StyledImg src={questions[currQuestion].flag} />
            </ImgWrapper>
            <Modal
                handleNext={handleNext}
                isCorrect={isCorrect}
                hasAnswered={hasAnswered}
                correctAnswer={questions[currQuestion].correctAnswer}
            />
            <Confetti isCorrect={isCorrect} />
            <StyledRowButton>
                {questions[currQuestion].answers?.map(
                    (answer: string, id: number): JSX.Element => (
                        <AnswerButton
                            key={id}
                            handleClick={handleClick}
                            answer={answer}
                            correctAnswer={
                                questions[currQuestion].correctAnswer
                            }
                        />
                    )
                )}
            </StyledRowButton>
        </StyledQuestion>
    );
};

export default Question;

const StyledQuestion = styled.div`
    min-width: 10vw;
    max-height: 100vh;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: repeat(1fr 3fr 2fr);
    grid-template-areas:
        "score"
        "flag"
        "buttonRow";
`;

const StyledBoardInfo = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    grid-area: score;
    align-self: center;
    align-items: flex-end;
    flex-wrap: wrap;
`;

const Score = styled.div`
    font-size: 18px;
    font-weight: bold;
`;
const QuestionNum = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const ImgWrapper = styled.div`
    grid-area: flag;
    align-self: center;
    display: inline-block;
    overflow: hidden;
    width: 100%;
    padding-bottom: 70%;
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
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    max-width: 50vw;
    align-self: center;
    margin: 0 auto;
    grid-area: buttonRow;
`;
