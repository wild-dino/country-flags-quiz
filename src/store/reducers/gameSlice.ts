import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
    gameStatus: string;
    questionNumber: number;
    hasAnswered: boolean;
    score: number;
    correctAnswer: string;
    isCorrect: boolean;
}

type UpdateAction = {
    hasAnswered: boolean;
    correctAnswer: string;
    isCorrect: boolean;
};

const initialState: GameState = {
    gameStatus: "start",
    questionNumber: 0,
    hasAnswered: false,
    score: 0,
    correctAnswer: "",
    isCorrect: false,
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setGameStatus: (state, action: PayloadAction<string>) => {
            state.gameStatus = action.payload;
        },
        updateQuiz: (state, action: PayloadAction<UpdateAction>) => {
                state.questionNumber = ++state.questionNumber;
                state.hasAnswered = action.payload.hasAnswered;
                state.correctAnswer = action.payload.correctAnswer;
                state.isCorrect = action.payload.isCorrect;
                action.payload.isCorrect? state.score += 10 : state.isCorrect = false;
        },
        resetQuiz: (state) => {
            state = initialState;
        },
    },
});

export const { setGameStatus, updateQuiz, resetQuiz } = gameSlice.actions;

export default gameSlice.reducer;
