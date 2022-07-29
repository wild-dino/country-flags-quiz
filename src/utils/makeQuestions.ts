import { ICountry } from '../types/types';
import { IQuestion} from "../types/types";
import { shuffleArray } from "./shuffleArray";

export const makeQuestions = (number: number, countries: ICountry[]) => {
    const answers: string[][] = [];
    const questions: IQuestion[] = countries.map(function (country) {
        return {
            flag: country.flag,
            correctAnswer: country.name,
            incorrectAnswer: countries.filter(
                (elem) => elem.name !== country.name
            ),
        };
    });

    shuffleArray(questions);
    questions.forEach((elem) => {
        answers.push(elem.incorrectAnswer!.map((country) => country.name));
        delete elem.incorrectAnswer;
    });

    answers.forEach((answer, index) => {
        shuffleArray(answer);
        answer.push(questions[index].correctAnswer);
        answer.length = 3;
        answer.push(questions[index].correctAnswer);
    });
    answers.map((answer) => shuffleArray(answer));
    questions.map((question, index) => question.answers = answers[index])

    answers.length = number;
    questions.length = number;

    return questions;
};
