import React, { useEffect, useState } from 'react';
import { Container } from '../container/container.stories';
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
        <Container
            {...filteredProps}
            className={classes.screen}>
        </Container>
        <Container
            config={{ ghost: true }}
            style={{ zIndex: 2 }}>
            {props?.children}
        </Container>
    </>
}


// export default forwardRef(screenComponent)

