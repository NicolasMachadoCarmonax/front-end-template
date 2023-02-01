import React from 'react';
import classes from './container.module.scss'

export const ContainerComponent = (props) => {
    const { config, events, styles, children } = props
    return <div onMouseOver={events?.onMouseOver} className={classes.container} style={styles}>
        {children}
    </div>
}