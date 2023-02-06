import React, { createRef, useRef } from 'react';
import { mapNavModules, onNavOut, onNavOver } from './nav.functions';
import { Container, VerticalFlex } from '../container/container.stories';
import { useRecoilState } from 'recoil';
import { navFlagState } from './nav.state';

export const NavComponent = (props) => {
    const { data, config, events, style, className, children, childrenStyle } = props
    
    const [navFlag, setNavFlag] = useRecoilState(navFlagState);

    return <VerticalFlex
        style={style}
        className={className}
    >
        {true && mapNavModules({ containers: data?.containers, style: childrenStyle?.buttons })}
    </VerticalFlex >

}