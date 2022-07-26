import React, { useState } from "react";
import { useStatusGame } from "./hooks/useStatusGame";
import EndScreen from "./pages/EndScreen";
import QuestionsPage from "./pages/QuestionsPage";
import StartingPage from "./pages/StartingPage";

const App = () => {
    
    return (
        <>
        {gameState === 'start' &&  <StartingPage/>}
        {gameState === 'play' && <QuestionsPage/>}
        {gameState === 'end' && <EndScreen/>}
        </>
    ) 
};

export default App;
