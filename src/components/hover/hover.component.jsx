import React from 'react';
import { Container } from '../container/container.stories';

export const HoverComponent = (props) => {
    const { data, config, events, style, className, children, childrenStyle } = props

    return props?.config?.state && <Container
            {...props}>

            {props?.children}
        </Container>
}


// export default forwardRef(hoverComponent)

