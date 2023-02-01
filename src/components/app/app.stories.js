import React from 'react';

import { App } from './app.base.js';

export default {
    title: 'App/App',
    component: App
}

export const BaseApp = (args) => <App args={args}/>

export const NavApp = (args) => <App args={args} styles={{
    gridTemplateColumns: '2% 86% 10% 2%',
}}/>
