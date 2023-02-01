import React from 'react';
import classes from './nav.module.scss';
import { mapNavModules } from './nav.functions';

export const NavJSX = (props) => {
    const { modules } = props
    // Recieves hooks from base

    // JSX goes here
    return <div onMouseOver={() => { console.log('x') }} className={classes.nav} style={props.styles}>
        {mapNavModules({modules})}
        
    </div>
}