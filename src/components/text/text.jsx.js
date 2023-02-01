import React from 'react';
import classes from './text.module.scss';

export const TextJSX = (props) => {
    // Recieves hooks from base
    const { title } = props
    // JSX goes here
    return <div className={classes.text} style={props?.styles}>
        {title}
    </div>
}
