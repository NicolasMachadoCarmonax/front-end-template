import React from 'react';
import { Grid } from '../box/box.stories';

export const PageComponent = (props) => {
    return <Grid {...props}>
        {props?.children}
    </Grid>
}