import { useMemo } from "react";
import { makeQuestions } from "../utils/makeQuestions";
import { useAppSelector } from "./redux";

export const useQuestions = (number: number) => {
    const countries = useAppSelector((state) => state.countries.countries);

    const shuffledQuestions = useMemo(() => {
        return makeQuestions(number, countries);
    }, [number, countries]);

    return shuffledQuestions;
};
