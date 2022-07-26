import { useState } from 'react';
import { IQuestion } from './../types/types';
import { shuffleArray } from './../utils/shuffleArray';
import { useAppSelector } from './redux';

export const useQuestions = (number: number) => {
    const countries = useAppSelector(state => state.countries.countries);
    const questions: IQuestion[] = countries.map(function(country) {
    return {flag: country.flag, correctAnswer: country.name, incorrectAnswer: countries.filter(elem => elem.name !== country.name)}
  });
    shuffleArray(questions);
    questions.length = number;
    return questions;
}
