import React from 'react';

const TextJSX = (props) => {
    // Recieves hooks from base
    console.log(props)
    const { title } = props
    // JSX goes here
    return <div style={style}>
        {title}
    </div>
}

const style = {
    fontWeight: '400',
    fontSize: '24px',
    color: 'red'
}

module.exports = { TextJSX }