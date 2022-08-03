export interface ICountry {
    name: string;
    capital: string;
    flag: string;
    population: number;
}

export interface IQuestion {
    id: number;
    flag: string;
    correctAnswer: string;
    incorrectAnswer?: ICountry[];
    answers?: string[];
}

export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

export interface AnswerButtonProps {
    answer: string;
    handleClick: (answer: string, hasAnswered: boolean) => void;
    correctAnswer: string;
}

export interface StyledButonProps {
    active: boolean;
    correctAnswer: string;
    answer: string;
    answered?: boolean;
}

export interface ModalProps {
    correctAnswer: string;
    isCorrect: boolean;
    hasAnswered: boolean;
    handleNext: () => void;
}

export interface ConfettiProps {
    isCorrect: boolean;
}

export interface WindowDimensions {
    width: number;
    height: number;
}

export interface LayoutProps {
    children: JSX.Element | JSX.Element[];
}