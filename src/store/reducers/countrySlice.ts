import { ICountry } from './../../types/types';
import { fetchCountries } from './actions';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CountryState {
    countries: ICountry[];
    isLoading: boolean;
    error: string;
}

const initialState: CountryState = {
    countries: [],
    isLoading: false,
    error: "",
}

export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCountries.fulfilled.type]: (state, action: PayloadAction<ICountry[]>) => {
            state.isLoading = false;
            state.error = '';
            state.countries = action.payload;
        },
        [fetchCountries.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCountries.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default countrySlice.reducer;