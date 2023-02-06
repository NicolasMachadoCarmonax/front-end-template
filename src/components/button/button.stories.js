import React from 'react';
import { ButtonComponent } from './button.component.jsx';
import classes from './button.module.scss'

export default {
    title: 'App/Button',
    component: ButtonComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Button = (props) => <ButtonComponent {...props}  className={`${classes.button} ${props?.className}`}/>

// export const NavButton = (props) => <ButtonComponent className={`${classes.button} ${classes.navButton} ${props?.className}`} {...props} />

