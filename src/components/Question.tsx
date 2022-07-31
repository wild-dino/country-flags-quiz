import React, { FC, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/useActions";
import { useQuestions } from "../hooks/useQuestions";
import Button from "./Button";

const Question: FC = () => {
    const questions = useQuestions(10);
    const {updateQuestion} = useActions();
    const isLoading = useAppSelector((state) => state.countries.isLoading);
    const questionNumber = useAppSelector((state) => state.game.questionNumber);

    console.log(questions);

    const handleClick = (answer: string): void => {
        answer === questions[questionNumber].correctAnswer? console.log('yes') :  console.log('no');
        updateQuestion();
    };

    if (isLoading) {
        return <h1>Creating questions... ^_^</h1>;
    }

    return (
        <div>
            <img src={questions[questionNumber].flag} style={{maxWidth: 500}} alt="flag" />
            {
                questions[questionNumber].answers?.map((answer, id): JSX.Element => (
                    <Button key={id} handleClick={handleClick} answer={answer} id={id} correctAnswer={questions[questionNumber].correctAnswer} />
                ))
            }
        </div>
    );
};

export default Question;
