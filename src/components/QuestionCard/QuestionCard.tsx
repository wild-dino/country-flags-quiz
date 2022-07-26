import React, {FC, useEffect} from "react";
import { useAppDispatch} from "../../hooks/redux";
import { useQuestions } from "../../hooks/useQuestion";
import { fetchCountries } from "../../store/reducers/actions";

const QuestionCard: FC = () => {
    const dispatch = useAppDispatch(); 
    const question = useQuestions(10);

    useEffect(()=> {
        dispatch(fetchCountries());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(question);

    return (
        <div>
        </div>
    )
};
      
export default QuestionCard;