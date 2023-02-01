import React from 'react';
import classes from './container.module.scss'
export const ContainerJSX = (props) => {
    // Recieves hooks from base

    // JSX goes here
    return <div className={classes.container} style={props.styles}>
        {props.children}
    </div>
}