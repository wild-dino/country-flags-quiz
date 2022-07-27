import { IQuestion } from "./../types/types";
import { shuffleArray } from "./../utils/shuffleArray";
import { useAppSelector } from "./redux";

export const useQuestions = (number: number) => {
    const countries = useAppSelector((state) => state.countries.countries);
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
        answers.push(elem.incorrectAnswer!.map((country) => country.name))
        delete elem.incorrectAnswer
    });

    answers.forEach((answer, index) => {
        shuffleArray(answer);
        answer.push(questions[index].correctAnswer)
        answer.length = 3;
        answer.push(questions[index].correctAnswer)
    });

    answers.length = number;
    questions.length = number;
    console.log(questions, answers);

    return { questions, answers };
};
