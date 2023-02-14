import React from 'react';
import { PageComponent } from './page.component.jsx';
import classes from './page.module.scss'

export default {
    title: 'Page/Page',
    component: PageComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Page = (props) => <PageComponent {...props} className={`${classes.page} ${props?.className}`}/>
