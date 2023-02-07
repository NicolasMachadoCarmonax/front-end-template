import React from 'react';
import { Box } from '../box/box.stories';

export const AppComponent = (props) => {
    return <Box {...props}>
        {props?.children}
    </Box>
}