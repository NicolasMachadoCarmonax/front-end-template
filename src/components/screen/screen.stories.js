import React from 'react';
import { ContainerComponent } from './screen.component.jsx';
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

export const Container = (props) => <ContainerComponent className={`${classes.container} ${props?.className}`} {...props} />

export const ContainerPad = (props) => <ContainerComponent className={`${classes.container} ${classes.pad} ${props?.className}`}{...props} />

export const HorizontalFlex = (props) => <ContainerComponent className={`${classes.container} ${classes.horizontalFlex} ${props?.className}`} {...props} />;

export const VerticalFlex = (props) => <ContainerComponent className={`${classes.container} ${classes.verticalFlex} ${props?.className}`} {...props} />

export const VerticalFlexPad = (props) => <ContainerComponent className={`${classes.container} ${classes.verticalFlex} ${classes.pad} ${props?.className}`}{...props} />

export const HorizontalFlexPad = (props) => <ContainerComponent className={`${classes.container} ${classes.horitzontalFlex} ${classes.pad} ${props?.className}`}{...props} />
