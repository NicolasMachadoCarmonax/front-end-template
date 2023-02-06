import React, { createRef, useRef } from 'react';
import { forwardRef } from 'react';
import classes from './container.module.scss'

export const ContainerComponent = (props) => {
    const { data, config, events, style, className, children } = props

    const ref = useRef()

    console.log(events)

    return <div
        ref={ref}
        {...events}
        className={config?.ghost ? `${classes.ghost} ${className}` : className}
        style={style}>
        {children}
    </div>
}


// export default forwardRef(ContainerComponent)

