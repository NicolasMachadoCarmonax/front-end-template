import React, { useRef } from 'react';
import { navButtonHover } from './button.functions';

export const ButtonComponent = (props) => {
    const { data, config, events, style, className, children, childrenStyle } = props

    const ref = useRef()

    return <div ref={ref} onClick={events?.onClick} onMouseOver={navButtonHover} className={className} style={style}>
        {children}
    </div>
}