import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Box } from '../box/box.stories';
import { navFlagState } from '../nav/nav.state';
import classes from './screen.module.scss'
import { screenFlagState } from './screen.state';

export const ScreenComponent = (props) => {
    const { data, config, events, style, className, children, childrenStyle } = props

    const [screenFlag, setScreenFlag] = useRecoilState(screenFlagState);

    function hideScreen(props) { setScreenFlag(false) }

    console.log(props)

    return props?.config?.screenState && <Box
    className={className}
{...props}>
        <Box
                events={{
                    onMouseOver: (ref) => { hideScreen(ref) }
                }}
            className={classes.screen}>

        </Box>
        {props?.children}
    </Box>
}


// export default forwardRef(screenComponent)

