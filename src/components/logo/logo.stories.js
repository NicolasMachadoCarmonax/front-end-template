import React from 'react';
import { LogoComponent } from './logo.component.jsx';
import classes from './logo.module.scss'

export default {
    title: 'App/Logo',
    component: LogoComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Logo = (props) => <LogoComponent {...props} className={`${classes.logo} ${props?.className}`}/>

export const SmallLogo = (props) => <LogoComponent {...props} className={`${classes.logo} ${classes.small_logo} ${props?.className}`}/>

export const BigLogo = (props) => <LogoComponent {...props} className={`${classes.logo} ${classes.big_logo} ${props?.className}`}/>