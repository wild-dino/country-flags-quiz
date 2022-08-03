import {combineReducers, configureStore} from "@reduxjs/toolkit";
import countryReducer from "./reducers/countrySlice";
import gameReducer from './reducers/quizSlice';

const rootReducer = combineReducers({
    countries: countryReducer,
    quiz: gameReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        // do not forget this
        devTools: process.env.NODE_ENV !== 'production',
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


