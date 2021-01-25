import React from 'react';
import TextField from '@material-ui/core/TextField';

type TextInput = {
    label: string,
    multiline: boolean,
    rows: number,
    value: string,
    onChange: (e: any) => void,
    style?: any,
    type?: string,
    defaultValue?: string 
}

const TextInput = (props: TextInput)=> {
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