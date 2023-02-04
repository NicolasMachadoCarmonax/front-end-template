import React, { createRef, useRef } from 'react';
import { forwardRef } from 'react';
import classes from './container.module.scss'

export const ContainerComponent = (props) => {
    const { data, config, events, style, className, children } = props

    const ref = useRef()

    return <div
        ref={ref}
        onMouseOver={() => { events?.onMouseOver(ref) }}
        onMouseOut={() => { events?.onMouseOut(ref) }}
        className={config?.ghost ? `${classes.ghost} ${className}` : className}
        style={style}>
        {children}
    </div>
}


// export default forwardRef(ContainerComponent)

