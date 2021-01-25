import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
    button:{
        marginBottom:'8px',
        padding:'8.5px',
        fontWeight:'bold',
        border:'1px solid #92b2e0',
        '&:hover':{
            backgroundColor:"#92b2e0",
            color:"#fff"
        }
    }
})

type AnswerProps = {
    content: any,
    selectAnswer: any
    nextId: any
}

const Answer = (props: AnswerProps)=>{
    const classes = useStyle()
    return(
        <Button variant="outlined" className={classes.button} onClick={()=>props.selectAnswer(props.content,props.nextId)}>{props.content}</Button>
    )
}

export default Answer