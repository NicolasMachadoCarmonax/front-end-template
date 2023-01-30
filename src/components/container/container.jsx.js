const { containerColor, borderRadius, width, height, display } = require('@/styles/global.js');

import React from 'react';

const ContainerJSX = (props) => {
    // Recieves hooks from base

    // JSX goes here
    return <div style={style}>
                </div>
}

const style = {
    width,
    height,
    display,
    backgroundColor: containerColor,
    borderRadius,
}

module.exports = { ContainerJSX }