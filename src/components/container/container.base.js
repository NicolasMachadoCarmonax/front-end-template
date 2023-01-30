const { ContainerJSX } = require('./container.jsx.js');

// Component base
const Container = (props) => {
    console.log(props)
    // Hooks here

    // JSX call here, pass hooks as props
    return <ContainerJSX />

}

module.exports = { Container }