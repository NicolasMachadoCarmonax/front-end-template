import React, { useEffect, useState } from 'react';
import { Container, VerticalFlex } from '../container/container.stories';
import { Subtitle, Title } from '../text/text.stories';
import { mapListData, mapListText } from './list.functions';
export const ListComponent = (props) => {
    const { data, config, events, style, className, children } = props

    if (Object.keys(data).length == 1) {
        return <Container style={{ gridTemplateRows: '1fr 9fr' }}>
            <VerticalFlex>
                <Subtitle data={{ label: mapListText({ data }) }} />
            </VerticalFlex>

            <VerticalFlex style={{ justifyContent: 'flex-start', gap: '6%' }}>
                {mapListData({ data })}
            </VerticalFlex>
        </Container>
    }

    return <Container>
        <VerticalFlex style={{ justifyContent: 'flex-start', gap: '6%' }}>
            {mapListData({ data })}
        </VerticalFlex>
    </Container>


}