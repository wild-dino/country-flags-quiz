import React, { FC } from "react";
import { IQuestion } from "../../../../types/types";

interface QuestionProps {
    correctAnswer: string;
    flag: string;
    answers: string[];
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Question: FC<QuestionProps> = ({ flag, answers, onClick }) => {
    return (
        <div>
            <h1>say the name of the country</h1>
            <img src={flag} alt="flag"></img>
            {answers.map((answer) => (
                <button onClick={onClick} key={answer} value={answer}>
                    {answer}
                </button>
            ))}
        </div>
    );
};

export default Question;
