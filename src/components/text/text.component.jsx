import React from 'react';
import { Container } from '../container/container.stories';

export const TextComponent = (props) => {
    const { data, config, events, style, className, children } = props

    return <p className={className} style={style}>{data ? data.label : children}</p>
}
