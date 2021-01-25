import React from 'react'
import {Chat} from './index'

import {List,makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    listGgrid:{
        height:'400px',
        overflow:'scroll'
    }
})

type ChatsProps = {
    chats: any
}

const Chats = (props: ChatsProps)=>{
    const classes = useStyle()

    return(
        <List  className={classes.listGgrid} id="scrollHeight">
            {
                props.chats.map((chat:any ,index: any)=>{
                   return  <Chat text={chat.text} type={chat.type}key={index}/>
                })
            }
        </List>
    )
}

export default Chats