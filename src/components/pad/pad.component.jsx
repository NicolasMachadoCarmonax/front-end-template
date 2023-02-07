import React from 'react';
import { Box } from '../box/box.stories';

export const PadComponent = (props) => {
    return <Box config={{ghost: true}} {...props}>
        {props?.children}
    </Box>
}