import React, { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";

const Card: FC = () => {
    const {setGameStatus} = useActions();
   

    const statusHandler = () => {
        setGameStatus('quiz');
    }

    return (
        <div>
            <h1>Welcom to countries quizz game!</h1>
            <button onClick={statusHandler} >Start</button>
        </div>
    );
};

export default Card;
