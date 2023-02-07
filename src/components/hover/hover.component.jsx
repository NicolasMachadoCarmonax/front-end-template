import React from 'react';
import { Box } from '../box/box.stories';

export const HoverComponent = (props) => {
    return props?.config?.state && <Box {...props}>
        {props?.children}
    </Box>
}

