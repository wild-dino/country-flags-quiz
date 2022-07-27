import { IQuestion } from "./../types/types";
import { shuffleArray } from "./../utils/shuffleArray";
import { useAppSelector } from "./redux";

export const useQuestions = (number: number) => {
    const countries = useAppSelector((state) => state.countries.countries);
    const answers: string[][] = [];
    const questions: IQuestion[] = countries.map(function(country) {
        return {
            flag: country.flag,
            correctAnswer: country.name,
            incorrectAnswer: countries.filter(
                (elem) => elem.name !== country.name
            ),
        };
    });

    shuffleArray(questions);

    questions.map((elem) =>
        answers.push(elem.incorrectAnswer!.map((country) => country.name))
    );
    questions.forEach((item) => delete item.incorrectAnswer);

    questions.length = number;
    answers.map((answers) => shuffleArray(answers));
    answers.map((randomAnswers) => (randomAnswers.length = 3));
    answers.length = number;
    answers.map((answer, index) => answer.push(questions[index].correctAnswer));
    console.log(questions, answers);

    return { questions, answers };
};
