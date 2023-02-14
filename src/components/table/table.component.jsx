import React, { createElement, useEffect, useRef, useState } from 'react';
import { Empty, Grid, Flex, VFlex, Wrap } from '../box/box.stories';
import { Dropdown } from '../dropdown/dropdown.stories';
import { List } from '../list/list.stories';
import variables from '../../styles/global.module.scss'
import { Bold, Title } from '../text/text.stories';

export const TableComponent = (props) => {
    const ref = useRef()
    // Config to create: Show actions?, which side to show actions
    return < Grid style={{
        gridTemplateRows: '10% 2% 78%', ...props?.style
    }} {...props}>
        < Grid style={{
            gridTemplateColumns: '90% 10%',
            gridTemplateRows: '25% 50% 25%',
            justifyContent: 'space-between'
        }}>
            <Title style={{gridRow: '1 / 4'}}>{props?.data.title}</Title>
            <Dropdown style={{gridRow: '2 / 3'}} data={{ options: props?.data.actions }} />
        </Grid >
        <Empty />
        <Flex style={{ borderRadius: '0', justifyContent: 'space-between' }}>
            <List style={props?.childrenStyle?.listBox} data={{ Header: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,] }} />
            <List style={props?.childrenStyle?.listBox} data={{ Header: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,] }} />
            <List style={props?.childrenStyle?.listBox} data={{ Header: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,] }} />
            <List style={props?.childrenStyle?.listBox} data={{ Header: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,] }} />
            <List style={props?.childrenStyle?.listBox} data={{ Header: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,] }} />
            <List style={props?.childrenStyle?.listBox} data={{ Header: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,] }} />
            <List style={props?.childrenStyle?.listBox} data={{ Header: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,] }} />
            <List style={props?.childrenStyle?.listBox} data={{ Header: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,] }} />
        </Flex>
    </Grid >
    {/* Small Table */ }
    //     <Box style={{ height: '90%', width: '40%', alignSelf: 'start', padding: '1vw 2vw' }}>
    //     <Wrap style={{ gridTemplateRows: '20% 10% 70%' }}>
    //         {/* Commodity Header + Actions */}
    //         <Box style={{
    //             gridTemplateColumns: '90% 10%',
    //             justifyContent: 'space-between'
    //         }}>
    //             <Title>Productores</Title>
    //             <Dropdown data={{
    //                 options: [
    //                     'Crear',
    //                     'Editar'
    //                 ]
    //             }} />
    //         </Box>
    //         <Empty />
    //         <Table />
    //     </Wrap>
    // </Box>
}

export default TableComponent