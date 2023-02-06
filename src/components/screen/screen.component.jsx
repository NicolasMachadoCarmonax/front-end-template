import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Container, ContainerPad } from '../container/container.stories';
import { navFlagState } from '../nav/nav.state';
import classes from './screen.module.scss'
import { screenFlagState } from './screen.state';

export const ScreenComponent = (props) => {
    const [screenFlag, setScreenFlag] = useRecoilState(screenFlagState);

    function screenClick(props) { setScreenFlag(false) }

    console.log(props?.config?.screenState)

    return props?.config?.screenState && <Container
        {...props}>
        <Container
            events={{
                onClick: (ref) => { screenClick(ref) }
            }}
            className={classes.screen}>

        </Container>
        {props?.children}
    </Container>
}


// export default forwardRef(screenComponent)

