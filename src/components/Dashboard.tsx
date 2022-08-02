import EndScreen from "./../pages/EndScreen";
import QuestionsPage from "./../pages/QuestionsPage";
import StartingPage from "./../pages/StartingPage";
import { useAppSelector } from "@/hooks/redux";
import Layout from "./Layout";

const Dashboard = () => {
    const status = useAppSelector((state) => state.game.gameStatus);
    return (
        <>
            {status === "start" && <StartingPage />}
            {status === "quiz" && <QuestionsPage />}
            {status === "end" && <EndScreen />}
        </>
    );
};

export default Dashboard;
