import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
    gameStatus: string;
    questionNumber: number;
}

const initialState: GameState  = {
    gameStatus: 'start',
    questionNumber : 0,
    
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGameStatus: (state, action: PayloadAction<string>) => {
            state.gameStatus = action.payload;
        },
        updateQuestion: (state) => {
            state.questionNumber === 9? state.gameStatus = 'end' : state.questionNumber++;
        }
    }
});

export const {
    setGameStatus,
    updateQuestion
} = gameSlice.actions;

export default gameSlice.reducer;
