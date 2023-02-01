import React from 'react';

import { Container } from './container.base.js';

export default {
    title: 'App/Container',
    component: Container
}

export const BaseContainer = (args) => <Container args={args}/>

export const Module = (args) => <Container args={args} styles={{
    width: '100%',
    gridColumn: '2 / 3',
    gridTemplateRows: '4% 10% 2% 80% 4%',
    gridTemplateColumns: '2% 18% 78% 2%',
}} />

export const Header = (args) => <Container args={args} styles={{
    width: '100%',
    height: '100%',
    gridColumn: '2 / 3',
    gridRow: '2 / 3',
    backgroundColor: '#fff'
}} />;

export const Section = (args) => <Container args={args} styles={{
    width: '100%',
    height: '100%',
    gridColumn: '2 / 4',
    gridRow: '4 / 5',
    backgroundColor: '#fff'
}} />;

export const Flex = (args) => <Container args={args} styles={{
    display: 'flex',
}} />;