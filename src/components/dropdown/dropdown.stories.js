import React from 'react';
import { DropdownComponent } from './dropdown.component.jsx';
import classes from './dropdown.module.scss';

export default {
    title: 'App/Dropdown',
    component: DropdownComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
                { name: 'light', value: '#122247' }
            ],
        },
    }
}

export const Dropdown = (props) => <DropdownComponent {...props} className={`${classes.dropdown} ${props?.className}`} />