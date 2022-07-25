import React, {FC, useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useQuestions } from "../../hooks/useQuestion";
import { fetchCountries } from "../../store/reducers/actionCreators";

const QuestionCard: FC = () => {
    const dispatch = useAppDispatch(); 
    const question = useQuestions(10);

    useEffect(()=> {
        dispatch(fetchCountries());
    }, [])

    console.log(question);

    return (
        <div>
        </div>
    )
};
      
export default QuestionCard;
