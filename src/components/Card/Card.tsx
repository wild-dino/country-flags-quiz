import React, { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";

const Card: FC = () => {
    const {setGameStatus} = useActions();
    const {fetchCountries} = useActions();

    const handleStatus = () => {
        setGameStatus('quiz');
    }
    
    useEffect(() => {
        fetchCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Welcom to countries quizz game!</h1>
            <button onClick={handleStatus} >Start</button>
        </div>
    );
};

export default Card;
