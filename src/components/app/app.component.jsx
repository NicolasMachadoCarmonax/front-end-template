import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { Container } from '../container/container.stories';
import { navFlagState } from '../nav/nav.state';
import { hideNav, showNav } from './app.functions';

export const AppComponent = (props) => {
    const { data, config, events, style, className, children } = props

    const [navFlag, setNavFlag] = useRecoilState(navFlagState);

    return <Container className={className} style={style}>
        {children}
    </Container>
}