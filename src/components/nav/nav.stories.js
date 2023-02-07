import React from 'react';
import { NavComponent } from './nav.component.jsx';
import classes from './nav.module.scss';

export default {
    title: 'App/Nav',
    component: NavComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Nav = (props) => <NavComponent {...props} className={`${classes.nav} ${props?.className}`}/>