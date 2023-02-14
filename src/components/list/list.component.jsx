import React from 'react';
import { Grid, VFlex, Empty, Scroll } from '../box/box.stories';
import { Bold, Subtitle, Text } from '../text/text.stories';
import { mapListData, mapListText } from './list.functions';
export const ListComponent = (props) => {
    {/* With Header */ }
    if (Object.keys(props?.data).length == 1) {
        return <Grid {...props} style={{ gridTemplateRows: '14% 5% 81%' }}> {/* ? */}
            <Grid style={{ borderRadius: '0', }}>
                <Bold style={{ justifySelf: 'start', color: 'brown' }}>{Object.keys(props?.data)}</Bold>
            </Grid>
            <Empty />
            <Scroll>
                <VFlex style={{ justifyContent: 'space-between', borderRadius: '0', gap: '6%' }}>
                    {mapListData({ data: { ...props?.data } })}
                </VFlex>
            </Scroll>
        </Grid>
    }
    {/* Without Header */ }
    return <Grid {...props}>
        <VFlex style={{ justifyContent: 'flex-start', gap: '6%' }}>
            {props?.data.map((label) => <Text>{label}</Text>)}
        </VFlex>
    </Grid>


}