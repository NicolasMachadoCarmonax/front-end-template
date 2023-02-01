import React from 'react';

import { AppComponent } from './app.component.jsx';

export default {
    title: 'App/App',
    component: AppComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const App = (args) => <AppComponent config={args?.config} events={args?.events} styles={args?.styles} children={args.children}/>

// export const NavApp = (args) => <App config={args?.config} events={args?.events} styles={{
//     gridTemplateColumns: '2% 84% 12% 2%',
//     ...args?.styles
// }} children={args.children}/>
