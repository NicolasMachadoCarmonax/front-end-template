import React, { useRef } from 'react';
import classes from './box.module.scss'

export const BoxComponent = (props) => {
    console.log(props?.events)
    const ref = useRef()
    return <div {...props} {...props?.events} ref={ref} className={props?.config?.ghost ? `${classes.ghost} ${props?.className}` : props?.className}>
        {props?.children}
    </div>
}