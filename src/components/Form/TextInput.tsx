import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (props: any)=> {
    return (
        <TextField 
        fullWidth={true}
        label={props.label}
        margin={"dense"}
        multiline={props.multiline}
        rows={props.rows}
        value={props.type}
        onChange={props.onChange}
        style={props.style}
        defaultValue={props.defaultValue ? props.defaultValue : ''}
        />
    );
  }

export default TextInput