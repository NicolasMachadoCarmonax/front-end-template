import React from 'react';
import classes from './button.module.scss'

export const ButtonComponent = (props) => {
    const { config, events, styles, children } = props
    return <div onClick={events?.onClick} onMouseOver={events?.onMouseOver} className={classes.button} style={styles}>
        {children}
    </div>
}