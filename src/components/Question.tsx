import React, { FC, useCallback, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/useActions";
import { useQuestions } from "../hooks/useQuestions";
import Button from "./Button";

const Question: FC = () => {
    const questions = useQuestions(10);
    const {updateQuestion} = useActions();
    const isLoading = useAppSelector((state) => state.countries.isLoading);
    const questionNumber = useAppSelector((state) => state.game.questionNumber);
    const [score, setScore] = useState(0);
    const [point, setPoint] = useState(0);

    console.log(questions);

    const handleClick = useCallback((answer: string) : void => {
        answer === questions[questionNumber].correctAnswer? console.log('yes') :  console.log('no');
        updateQuestion();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])  

    if (isLoading) {
        return <h1>Creating questions... ^_^</h1>;
    }

    return (
        <div>
            <h1>{point}</h1>
            <button onClick={()=> setPoint(point + 1)}>hi</button>
            <img src={questions[questionNumber].flag} style={{maxWidth: 500}} alt="flag" />
            {
                questions[questionNumber].answers?.map((answer, id): JSX.Element => (
                    <Button key={id} handleClick={handleClick} answer={answer} id={id} />
                ))
            }
        </div>
    );
};

export default Question;
