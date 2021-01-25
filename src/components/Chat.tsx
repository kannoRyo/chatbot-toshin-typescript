import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import ToshinIcon from '../assets/img/toshin-icon.jpg'
import NoProfile  from '../assets/img/no-profile.png'

type ChatProps = {
	text: any,
	type: any
}

const Chat = (props: ChatProps)=>{
    const isQuestion = props.type === 'question'
    const classes = (isQuestion) ? 'p-chat__row' : 'p-chat__reverse'

    return(
        <ListItem alignItems="flex-start" className={classes}>
        <ListItemAvatar>
            {
                isQuestion ?(
                    <Avatar alt="Remy Sharp" src={ToshinIcon} />
                ):(
                    <Avatar alt="Remy Sharp" src={NoProfile} />
                )

            }
          
        </ListItemAvatar>
            <div className="c-chat__bubble">{props.text}</div>
        </ListItem>
    )
}

export default Chat