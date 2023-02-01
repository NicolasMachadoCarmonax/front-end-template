import React from 'react';
import { ContainerJSX } from './container.jsx.js';


// Component base
export const Container = (props) => {
    console.log(props.args)
    // Hooks here
    // JSX call here, pass hooks as props
    return <ContainerJSX styles={props.styles}>{props.args.children}</ContainerJSX>

}
