import React from 'react';
import { BoxComponent } from './box.component.jsx';
import classes from './box.module.scss'

export default {
    title: 'App/Box',
    component: BoxComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Wrap = (props) => <BoxComponent {...props} className={`${classes.box} ${classes.wrap} ${props?.className}`} />

export const Box = (props) => <BoxComponent {...props} className={`${classes.box} ${props?.className}`} />

export const HFlex = (props) => <BoxComponent {...props} className={`${classes.box} ${classes.horizontalFlex} ${props?.className}`} />;

export const VFlex = (props) => <BoxComponent {...props} className={`${classes.box} ${classes.verticalFlex} ${props?.className}`} />

export const Empty = (props) => <BoxComponent {...props} className={`${classes.box} ${classes.empty} ${props?.className}`} />