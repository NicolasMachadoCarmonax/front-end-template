import React from 'react';
import { VFlex } from '../box/box.stories';

export const ButtonComponent = (props) => {
    return <VFlex {...props} {...props?.events}>
            {props?.children}
        </VFlex>
}