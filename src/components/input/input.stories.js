import React from 'react';
import { InputComponent } from './input.component.jsx';
import classes from './input.module.scss'

export default {
    title: 'App/Input',
    component: InputComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Input = (props) => <InputComponent {...props} className={`${classes.box} ${classes.input} ${props?.className}`} />