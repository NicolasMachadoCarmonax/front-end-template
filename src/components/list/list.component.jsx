import React from 'react';
import { Box, VFlex } from '../box/box.stories';
import { Subtitle } from '../text/text.stories';
import { mapListData, mapListText } from './list.functions';
export const ListComponent = (props) => {
    {/* With Header */ }
    if (Object.keys(props?.data).length == 1) {
        return <Box style={{ gridTemplateRows: '1fr 9fr' /* ? */ }}>
            <VFlex>
                <Subtitle>{Object.keys(props?.data)}</Subtitle>
            </VFlex>

            <VFlex style={{ justifyContent: 'flex-start', gap: '6%' }}>
                {mapListData({ data: { ...props?.data } })}
            </VFlex>
        </Box>
    }
    {/* Without Header */ }
    return <Box>
        <VFlex style={{ justifyContent: 'flex-start', gap: '6%' }}>
            {/* {mapListData(props?.data)} */}
        </VFlex>
    </Box>


}