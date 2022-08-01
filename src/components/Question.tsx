import { FC } from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/useActions";
import { useQuestions } from "../hooks/useQuestions";
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
            <StyledBackImg src={questions[questionNumber].flag} />
            {questions[questionNumber].answers?.map(
                (answer, id): JSX.Element => (
                    <Button
                        key={id}
                        handleClick={handleClick}
                        answer={answer}
                    />
                )
            )}
        </StyledQuestion>
    );
};

export default Question;

const StyledQuestion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledBackImg = styled.img`
    width: 50%;
    height: 100%;
    background-image: url(${(props) => props.src}) no-repeat center;
    background-size: cover;
`;
