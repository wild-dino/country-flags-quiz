import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuizState {
    gameStatus?: string;
    score?: number;
    isCorrect: boolean;
}

const initialState: QuizState = {
    gameStatus: "start",
    score: 0,
    isCorrect: false,
};

export const gameSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuizStatus: (state, action: PayloadAction<string>) => {
            state.gameStatus = action.payload;
        },
        updateQuiz: (state, action: PayloadAction<QuizState>) => {
                state.isCorrect = action.payload.isCorrect;
                action.payload.isCorrect? state.score! += 10 : state.isCorrect = false;
        },
        resetQuiz: (state) => {
            state = initialState;
        },
    },
});

export const { setQuizStatus, updateQuiz, resetQuiz } = gameSlice.actions;

export default gameSlice.reducer;
