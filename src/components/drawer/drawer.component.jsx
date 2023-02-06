import React, { useState, createElement, useEffect, cloneElement } from 'react';
import { Container } from '../container/container.stories';
import { Hover } from '../hover/hover.stories';
import { Screen } from '../screen/screen.stories';
import classes from './drawer.module.scss'

export const DrawerComponent = (props) => {
    const { data, config, events, style, className, children, childrenStyle } = props

    const [screenState, setScreenState] = useState(false)
    const showScreen = () => { setScreenState(true) }
    const hideScreen = () => { setScreenState(false) }


    return <>
        <Hover //Trigger in
            style={props?.childrenStyle?.hover}
            config={{ state: !screenState }}
            events={{ onMouseOver: showScreen }}
        />
        <Screen //Trigger out
            config={{ state: screenState }}
            events={{ onMouseOver: hideScreen }}
            childrenStyle={props?.childrenStyle}
        >
            {children}
        </Screen>
    </>

}
// export default forwardRef(DrawerComponent)

