import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { navFlagState } from '../nav/nav.state';
import { hideNav, showNav } from './app.functions';
import classes from './app.module.scss'

export const AppComponent = (props) => {
    const {config, styles, events} = props;
    const [navFlag, setNavFlag] = useRecoilState(navFlagState);
    
    const appRef = useRef()
    navFlag && showNav({appRef})
    !navFlag && hideNav({appRef})

    return <div ref={appRef} className={classes.app} style={props?.styles}>
        {props.children}
    </div>
}