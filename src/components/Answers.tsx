import React from 'react'
import {Answer} from './index'

type answerType = {
    content: string,
    nextId: string
}

type answersType = [
    answerType[]
] 

type AnswersProps = {
    answers: any,
    selectAnswer: (selectedAnswer:string, nextId:string) => void 
}

const Answers = (props: AnswersProps)=>{
    return(
        <div className="c-grid__answer">
            {
                props.answers.map((answer: any,index: number)=>{
                    return <Answer content={answer.content} selectAnswer={props.selectAnswer} nextId={answer.nextId} key={index}/>
                })
            }
        </div>
    )
}

export default Answers