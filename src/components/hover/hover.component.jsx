import React from 'react';
import { Grid } from '../box/box.stories';

export const HoverComponent = (props) => {
    return props?.config?.state && <Grid {...props}>
        {props?.children}
    </Grid>
}

