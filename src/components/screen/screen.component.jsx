import React, { useEffect, useState } from 'react';
import { Box } from '../box/box.stories';
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

    console.log(config?.state)

    return config?.state && <>
        <Box
            {...filteredProps}
            className={classes.screen}
            style={childrenStyle?.screen}>
        </Box>
        <Box
            config={{ ghost: true }}
            style={{ zIndex: 2, ...childrenStyle?.ghost }}
        >
            {props?.children}
        </Box>
    </>
}


// export default forwardRef(screenComponent)

