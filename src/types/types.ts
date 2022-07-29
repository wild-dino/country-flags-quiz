export interface ICountry {
    name: string;
    capital: string;
    flag: string;
    population: number;
}

export interface IQuestion {
    flag: string;
    correctAnswer: string;
    incorrectAnswer?: ICountry[];
    answers?: string[];
}