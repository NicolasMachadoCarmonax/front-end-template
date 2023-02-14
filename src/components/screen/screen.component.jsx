import React, { useEffect, useState } from 'react';
import { Grid, Wrap } from '../box/box.stories';
import classes from './screen.module.scss'

export const ScreenComponent = (props) => {
    const { data, config, events, style, className, children, childrenStyle } = props

    const [filteredProps, setFilteredProps] = useState({})

    function filterProps() {
        setFilteredProps({ data, config, events, style, className, childrenStyle })
    }

    useEffect(() => {
        filterProps()
    }, [])

    return config?.state && <>
        <Grid
            {...filteredProps}
            className={classes.screen}
            style={childrenStyle?.screen}>
        </Grid>
        <Wrap
            style={{ zIndex: 2 }}
        >
            {props?.children}
        </Wrap>
    </>
}


// export default forwardRef(screenComponent)

