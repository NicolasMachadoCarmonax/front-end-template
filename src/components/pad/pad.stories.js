import React from 'react';
import { PadComponent } from './pad.component.jsx';
import classes from './pad.module.scss'

export default {
    title: 'Pad/Pad',
    component: PadComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Pad = (props) => <PadComponent {...props} className={`${classes.pad} ${props?.className}`}/>
