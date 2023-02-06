import React from 'react';
import { HoverComponent } from './hover.component.jsx';
import classes from './hover.module.scss'

export default {
    title: 'App/Hover',
    component: HoverComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Hover = (props) => <HoverComponent className={`${classes.hover} ${props?.className}`} {...props} />