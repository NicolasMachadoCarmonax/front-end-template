import React from 'react';
import { ContainerComponent } from './container.component.jsx';
import classes from './container.module.scss'

export default {
    title: 'App/Container',
    component: ContainerComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Container = (props) => <ContainerComponent {...props} className={`${classes.container} ${props?.className}`}/>

export const ContainerPad = (props) => <ContainerComponent {...props} className={`${classes.container} ${classes.pad} ${props?.className}`} />

export const HorizontalFlex = (props) => <ContainerComponent {...props} className={`${classes.container} ${classes.horizontalFlex} ${props?.className}`} />;

export const VerticalFlex = (props) => <ContainerComponent {...props} className={`${classes.container} ${classes.verticalFlex} ${props?.className}`} />

export const VerticalFlexPad = (props) => <ContainerComponent {...props} className={`${classes.container} ${classes.verticalFlex} ${classes.pad} ${props?.className}`} />

export const HorizontalFlexPad = (props) => <ContainerComponent {...props} className={`${classes.container} ${classes.horitzontalFlex} ${classes.pad} ${props?.className}`} />
