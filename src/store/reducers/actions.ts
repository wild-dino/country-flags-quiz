import { ICountry } from '../../types/types';
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setQuizStatus, updateQuiz, resetQuiz } from './quizSlice';

const BASE_URL = "https://restcountries.com/v2/";
const ALL_COUNTRIES = BASE_URL + "all";

export const fetchCountries = createAsyncThunk(
    "countries/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = axios.get<ICountry[]>(ALL_COUNTRIES);
            return (await response).data.map(function(country: ICountry) {
                return { name: country.name, capital: country.capital, flag: country.flag, population: country.population};
            });
        } catch (e) {
            return thunkAPI.rejectWithValue("Faillllllll...");
        }
    }
);

export {setQuizStatus, updateQuiz, resetQuiz}
