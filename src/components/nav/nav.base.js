import React from 'react';
import { NavJSX } from './nav.jsx.js';


// Component base
export const Nav = (props) => {
    const { modules } = props.args
    // Hooks here
    // JSX call here, pass hooks as props
    
    return <NavJSX styles={props?.styles} modules={modules}>{props.args.children}</NavJSX>

}
