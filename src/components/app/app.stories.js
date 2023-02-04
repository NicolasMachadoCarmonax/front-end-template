import React from 'react';
import { AppComponent } from './app.component.jsx';
import classes from './app.module.scss'

export default {
    title: 'App/App',
    component: AppComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const App = (props) => <AppComponent className={`${classes.app} ${props?.className}`} {...props}/>

export const AppPad = (props) => <AppComponent className={`${classes.app} ${classes.pad} ${props?.className}`} {...props}/>