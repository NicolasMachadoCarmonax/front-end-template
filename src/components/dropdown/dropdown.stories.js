import React from 'react';
import { DropdownComponent } from './dropdown.component.jsx';

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

export const Dropdown = (args) => <DropdownComponent key={args?.key} data={args?.data} config={args?.config} events={args?.events} style={args?.style} />