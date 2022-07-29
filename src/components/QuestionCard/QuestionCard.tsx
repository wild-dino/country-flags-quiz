import React, {FC, useCallback, useEffect, useMemo, useState} from "react";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { useQuestions } from "../../hooks/useQuestions";
import Question from "../Question/Question";


const QuestionCard: FC = () => {
    const [currQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const questions = useQuestions(10);
    const {setGameStatus} = useActions();
    const isLoading = useAppSelector(state => state.countries.isLoading);
    
    console.log(questions);

    const checkHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(currQuestion === questions.length-1) {setGameStatus('end')}
        setCurrentQuestion(currQuestion => currQuestion + 1);
        if (e.currentTarget.value === questions[currQuestion].correctAnswer) {
            setScore(score => score + 10)
        }
        else {
            console.log('not good')
        }
    }

    if(isLoading) {
        return  <h1>Creating questions... ^_^</h1>
    }

    return (
        <div>
        <h1>{currQuestion + 1} / { questions.length}</h1>
        <div>Points:  {score}</div>
         {<Question correctAnswer={questions[currQuestion].correctAnswer}  flag={questions[currQuestion].flag} answers={questions[currQuestion].answers!} onClick={checkHandler}  />}  
        </div>
    )
};
      
export default QuestionCard;