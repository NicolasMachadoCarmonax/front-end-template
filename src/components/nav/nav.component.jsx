import React, { createRef, useEffect, useRef } from 'react';
import { mapNavModules } from './nav.functions';
import { VFlex } from '../box/box.stories';

export const NavComponent = (props) => {

    return <VFlex
        animationIn={(ref) => {
            ref.current.style.translate = '-5vw';
        }}
        animationOut={(ref) => {
            ref.current.style.translate = '5vw';
        }}
        {...props}>
        {mapNavModules({ containers: props?.data?.containers, style: props?.childrenStyle?.buttons })}
    </VFlex >

}