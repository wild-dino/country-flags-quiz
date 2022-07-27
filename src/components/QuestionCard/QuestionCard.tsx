import React, {FC, useEffect, useState} from "react";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { useQuestions } from "../../hooks/useQuestion";
import Question from "../Question/Question";

const QuestionCard: FC = () => {
    const [currQuestion, setCurrentQuestion] = useState(0);
    
    const questions = useQuestions(10);
    const isLoading = useAppSelector(state => state.countries.isLoading);
    

    if(isLoading) {
        return  <h1>'Создаем вопросы'</h1>
    }

    return (
        <div>
            <h1>
                ofdk
            </h1>
        </div>
    )
};
      
export default QuestionCard;