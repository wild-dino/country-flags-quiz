import React, { FC } from 'react';
import {IQuestion} from './../../types/types'

interface QuestionProps {
    question: IQuestion;
}

const Question: FC<QuestionProps> = ({question}) => {
    const {
        flag,
        correctAnswer,
        incorrectAnswer
    } = question;

    console.log('рендеринг вопросааа')

  return (
    <div>
        <h1>say the name of the country</h1>
        <img src={flag} alt='flag'></img>
    </div>
  )
}

export default Question
