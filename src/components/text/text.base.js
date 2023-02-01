import { TextJSX } from './text.jsx.js'
// Component base
const Text = (props) => {
    const { title } = props
    // Hooks here

    // JSX call here, pass hooks as props
    return <TextJSX styles={props?.styles} title={title} />

}

module.exports = { Text }