import React from 'react';
import { ContainerPad } from '../container/container.stories.js';
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

export const Nav = (props) => <NavComponent className={`${classes.nav} ${props?.className}`} {...props} />

export const NavPad = (props) => {
    return <ContainerPad style={props?.childrenStyle?.containerPad} config={{ ghost: true }}>
        <NavComponent className={`${classes.nav} ${props?.className}`} {...props} />
    </ContainerPad>

}