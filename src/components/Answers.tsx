import React from 'react'
import {Answer} from './index'

type AnswersProps = {
    answers: any,
    selectAnswer: any 
}

const Answers = (props: AnswersProps)=>{

    return(
        <div className="c-grid__answer">
            {
                props.answers.map((answer: any,index: any)=>{
                    return <Answer content={answer.content} selectAnswer={props.selectAnswer} nextId={answer.nextId} key={index}/>
                })
            }
        </div>
    )
}

export default Answers