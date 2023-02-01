import React from 'react';
import classes from './app.module.scss'
export const AppJSX = (props) => {
    // Recieves hooks from base

    // JSX goes here
    return <div className={classes.app} style={props?.styles}>
        {props.children}
    </div>
}