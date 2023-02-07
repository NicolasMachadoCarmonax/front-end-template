import React, { useState } from 'react';
import { Hover } from '../hover/hover.stories';
import { Screen } from '../screen/screen.stories';

export const DrawerComponent = (props) => {
    const [screenState, setScreenState] = useState(false)
    const showScreen = () => { console.log('through show screen'); setScreenState(true) }
    const hideScreen = () => { console.log('through hide screen'); setScreenState(false) }

    return <>
        <Hover //Trigger in
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

