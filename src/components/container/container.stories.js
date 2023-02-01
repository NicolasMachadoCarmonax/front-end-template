import React from 'react';

import { ContainerComponent } from './container.component.jsx';

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

export const Container = (props) => <ContainerComponent config={props?.config} events={props?.events} styles={props?.styles} children={props.children}/>

export const Module = (props) => <ContainerComponent config={props?.config} events={props?.events} styles={{
    gridColumn: '2 / 3',
    gridTemplateRows: '4% 10% 2% 80% 4%',
    gridTemplateColumns: '2% 18% 80%',
    ...props?.styles
}} children={props.children}/>

export const Header = (props) => <ContainerComponent config={props?.config} events={props?.events} styles={{
    gridColumn: '2 / 3',
    gridRow: '2 / 3',
    backgroundColor: '#fff',
    ...props?.styles
}} children={props.children}/>;

export const Section = (props) => <ContainerComponent config={props?.config} events={props?.events} styles={{
    gridColumn: '2 / 4',
    gridRow: '4 / 5',
    backgroundColor: '#fff',
    ...props?.styles
}} children={props.children}/>;

export const HorizontalFlex = (props) => <ContainerComponent config={props?.config} events={props?.events} styles={{
    display: 'flex',
    ...props?.styles
}} children={props.children}/>;

export const VerticalFlex = (props) => <ContainerComponent config={props?.config} events={props?.events} styles={{
    display: 'flex',
    flexDirection: 'column',
    ...props.styles
}} children={props.children}/>;