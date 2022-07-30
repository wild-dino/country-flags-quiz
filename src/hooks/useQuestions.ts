import { useMemo } from "react";
import { createQuestions } from "../utils/createQuestions";
import { useAppSelector } from "./redux";

export const useQuestions = (number: number) => {
    const countries = useAppSelector((state) => state.countries.countries);

    const shuffledQuestions = useMemo(() => {
        return createQuestions(number, countries);
    }, [number, countries]);

    return shuffledQuestions;
};
