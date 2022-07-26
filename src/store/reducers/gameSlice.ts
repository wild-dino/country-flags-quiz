import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
    gameStatus: string;
}


const initialState: GameState = {
    gameStatus: 'start',
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGameStatus: (state, action: PayloadAction<string>) => {
            state.gameStatus = action.payload;
        }
    }
});

export const {
    setGameStatus
} = gameSlice.actions;

export default gameSlice.reducer;
