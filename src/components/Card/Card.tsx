import React, { FC } from "react";
import { useActions } from "../../hooks/useActions";

const Card: FC = () => {
    const {setGameStatus} = useActions();

    const handleClick = () => {
        setGameStatus('quiz');
    }

    return (
        <div>
            <h1>Welcom to countries quizz game!</h1>
            <button onClick={handleClick} >Start</button>
        </div>
    );
};

export default Card;
