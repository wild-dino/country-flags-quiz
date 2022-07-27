import React, { FC } from 'react';
import {IQuestion} from './../../types/types'

interface QuestionProps {
    randomAnswers: string[];
}

const Question: FC<QuestionProps> = ({randomAnswers}) => {

    console.log(randomAnswers)

  return (
    <div>
        
    </div>
  )
}

export default Question
