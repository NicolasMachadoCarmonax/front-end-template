import React, { useState } from 'react';
import { Hover } from '../hover/hover.stories';
import { Screen } from '../screen/screen.stories';
import classes from './drawer.module.scss'

export const DrawerComponent = (props) => {
    const [screenState, setScreenState] = useState(false)
    const showScreen = () => { setScreenState(true) }
    const hideScreen = () => { setScreenState(false) }

    return <>
        <Hover //Trigger in
            className={classes.hover}
            style={props?.childrenStyle?.hover}
            config={{ state: !screenState }}
            events={{ onMouseOver: showScreen }}
        />
        <Screen //Trigger out
            config={{ state: screenState }}
            childrenStyle={props?.childrenStyle}
            events={{ onMouseOver: hideScreen }}
        >
            {props?.children}
        </Screen>
    </>

}

