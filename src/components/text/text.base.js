const { TextJSX } = require('./text.jsx.js');

// Component base
const Text = (props) => {
    console.log(props)
    // const { title } = props
    // Hooks here

    // JSX call here, pass hooks as props
    return <TextJSX/>

}

module.exports = { Text }