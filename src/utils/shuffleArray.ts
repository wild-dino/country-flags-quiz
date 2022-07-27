import { ICountry, IQuestion } from './../types/types';

export const shuffleArray = (...arrays: any[]) => {
    arrays.map((array) => array.sort(() => Math.random() - 0.5));
};
