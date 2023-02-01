import React from 'react';
import { NavComponent } from './nav.component.jsx';

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

export const Nav = (args) => <NavComponent config={args?.config} events={args?.events} styles={args?.styles} />

export const NavRounded = (args) => <NavComponent config={args?.config} events={args?.events} styles={{
    borderRadius: '3vw 0 0 3vw', 
    ...args?.styles
}} />