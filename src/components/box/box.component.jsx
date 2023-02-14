import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import classes from './box.module.scss'
import variables from '../../styles/global.module.scss'
export const BoxComponent = (props) => {
    // Animation
    const ref = useRef(null)
    useEffect(() => {
        try {
            props?.animation == 'opacity' ? ref.current.style.opacity = '1' : <></>;
        } catch (e) { console.log(e) };
    }, [ref])

    return <div {...props} ref={ref} >
        {props?.children}
    </div >
}