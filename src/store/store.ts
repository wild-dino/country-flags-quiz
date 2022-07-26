import {combineReducers, configureStore} from "@reduxjs/toolkit";
import countryReducer from "./reducers/countrySlice";
import gameReducer from './reducers/gameSlice';

const rootReducer = combineReducers({
    countries: countryReducer,
    game: gameReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


