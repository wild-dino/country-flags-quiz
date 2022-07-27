import React, { useEffect } from "react";
import { useAppSelector } from "./hooks/redux";
import { useActions } from "./hooks/useActions";
import EndScreen from "./pages/EndScreen";
import QuestionsPage from "./pages/QuestionsPage";
import StartingPage from "./pages/StartingPage";

const App = () => {
    const status = useAppSelector(state => state.game.gameStatus);
    
    return (
        <>
        {status === 'start' &&  <StartingPage/>}
        {status === 'quiz' && <QuestionsPage/>}
        {status === 'end' && <EndScreen/>}
        </>
    ) 
};

export default App;
