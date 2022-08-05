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

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuizStatus: (state, action: PayloadAction<string>) => {
            state.gameStatus = action.payload;
        },
        updateQuiz: (state, action: PayloadAction<QuizState>) => {
            state.isCorrect = action.payload.isCorrect;
            action.payload.isCorrect
                ? (state.score! += 10)
                : (state.isCorrect = false);
        },
        resetQuiz: (state) => {
            state.gameStatus = "start";
            state.isCorrect = false;
            state.score = 0;
        },
    },
});

export const { setQuizStatus, updateQuiz, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;
