import React, { useEffect } from "react";
import { useAppSelector } from "./hooks/redux";
import { useActions } from "./hooks/useActions";
import EndScreen from "./pages/EndScreen";
import QuestionsPage from "./pages/QuestionsPage";
import StartingPage from "./pages/StartingPage";

const App = () => {
    const status = useAppSelector(state => state.game.gameStatus);
    const {fetchCountries} = useActions();
    
    useEffect(() => {
        fetchCountries();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        {status === 'start' &&  <StartingPage />}
        {status === 'quiz' && <QuestionsPage />}
        {status === 'end' && <EndScreen/>}
        </>
    ) 
};

export default App;
