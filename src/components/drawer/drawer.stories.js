import React from 'react';
import { DrawerComponent } from './drawer.component.jsx';
import classes from './drawer.module.scss'

export default {
    title: 'App/Drawer',
    component: DrawerComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Drawer = (props) => <DrawerComponent {...props} className={`${classes.drawer} ${props?.className}`} />