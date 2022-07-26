import React, {FC, useEffect, useState} from "react";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { useQuestions } from "../../hooks/useQuestion";
import Question from "../Question/Question";

const QuestionCard: FC = () => {
    const [currQuestion, setCurrentQuestion] = useState(0);
    const {fetchCountries} = useActions();
    const questions = useQuestions(10);
    const isLoading = useAppSelector(state => state.countries.isLoading);
    console.log(questions)

    useEffect(()=> {
        fetchCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h1>
            {isLoading? 'Создаем вопросы' : <Question question={questions[currQuestion]}  />  }   
            </h1>
        </div>
    )
};
      
export default QuestionCard;