import { FC } from "react";
import styled from "styled-components";
import { useAppSelector } from "@/hooks/redux";
import { useActions } from "@/hooks/useActions";
import { useQuestions } from "@/hooks/useQuestions";
import Button from "./Button";

const Question: FC = () => {
    const questions = useQuestions(10);
    const { updateQuiz, setGameStatus } = useActions();
    const isLoading = useAppSelector((state) => state.countries.isLoading);
    let { questionNumber, score } = useAppSelector((state) => state.game);

    console.log(questions);

    const handleClick = (answer: string): void => {
        questionNumber === 9
            ? setGameStatus("end")
            : updateQuiz({
                  hasAnswered: true,
                  correctAnswer: questions[questionNumber!].correctAnswer,
                  isCorrect:
                      answer === questions[questionNumber!].correctAnswer
                          ? true
                          : false,
              });
    };

    if (isLoading) {
        return <h1>Creating questions... ^_^</h1>;
    }

    return (
        <StyledQuestion>
            <StyledScoreBoard>{score}</StyledScoreBoard>
            <ImgWrapper>
                <StyledImg src={questions[questionNumber].flag} />
            </ImgWrapper>
            <StyledRowButton>
                {questions[questionNumber].answers?.map(
                    (answer: string, id: number): JSX.Element => (
                        <Button
                            key={id}
                            handleClick={handleClick}
                            answer={answer}
                            isLoading={isLoading}
                        />
                    )
                )}
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
    padding-bottom: 90%;
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
