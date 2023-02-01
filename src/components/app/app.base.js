import React from 'react';
import { AppJSX } from './app.jsx.js';


// Component base
export const App = (props) => {
    process.env.ENVIORMENT === 'dev' && console.log(props.args)
    // Hooks here
    // JSX call here, pass hooks as props
    return <AppJSX styles={props?.styles}>{props.args.children}</AppJSX>

}
