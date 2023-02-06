import React from 'react';
import { ScreenComponent } from './screen.component.jsx';
import classes from './screen.module.scss'

export default {
    title: 'App/Screen',
    component: ScreenComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Screen = (props) => <ScreenComponent className={`${props?.className}`} {...props} />