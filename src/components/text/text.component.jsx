import React from 'react';

export const TextComponent = (props) => {
    return <p {...props}>{props?.data ? props?.data.label : props?.children}</p>
}
