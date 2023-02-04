import React from 'react';
import { ListComponent } from './list.component.jsx';
import classes from './list.module.scss';

export default {
    title: 'App/List',
    component: ListComponent,
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

export const List = (props) => <ListComponent className={`${classes.list}`} {...props}/>