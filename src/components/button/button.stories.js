import React from 'react';

import { ButtonComponent } from './button.component.jsx';

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

export const Button = (props) => <ButtonComponent config={props?.config} events={props?.events} styles={props?.styles} children={props.children} />

export const NavButton = (props) => <ButtonComponent config={props?.config} events={props?.events}  styles={{ height: '9%', width: '55%', backgroundColor: '#fff', zIndex: 1, ...props?.styles}}        children={props.children} />