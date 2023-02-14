import React, { forwardRef } from 'react';
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

export const Nav = (props) => {
    return props?.animation == 'on' || props?.animation === true ?
        <NavComponent {...props} className={`${classes.preAnimation} ${classes.nav} ${props?.className}`} /> : <NavComponent {...props} className={`${classes.nav} ${props?.className}`} />
}