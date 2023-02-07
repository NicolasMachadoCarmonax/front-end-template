import React from 'react';
import { mapNavModules } from './nav.functions';
import { VFlex } from '../box/box.stories';

export const NavComponent = (props) => {
    return <VFlex {...props}
    >
        {mapNavModules({ containers: props?.data?.containers, style: props?.childrenStyle?.buttons })}
    </VFlex >

}