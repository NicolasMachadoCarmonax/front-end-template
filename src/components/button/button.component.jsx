import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { navButtonHover } from './button.functions';

export const ButtonComponent = (props) => {
    const { data, config, events, style, className, children, childrenStyle } = props


    // const [domReady, setDomReady] = React.useState(false)

    // React.useEffect(() => {
    //     setDomReady(true)
    // })
    const ref = useRef()

    console.log(style)

    return <div ref={ref} onClick={events?.onClick} onMouseOver={navButtonHover} className={className} style={style}>
        {children}
    </div>
}

// export default createPortal(ButtonComponent)