import React from 'react';
import TableComponent from './table.component.jsx';
import classes from './table.module.scss'
export default {
    title: 'App/Table',
    component: TableComponent,
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

export const Table = (props) => <TableComponent {...props} className={`${classes.table} ${props?.className}`} />