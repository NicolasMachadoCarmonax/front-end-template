import { App, AppPad } from '../../components/app/app.stories';
import { Container, ContainerPad } from '../../components/container/container.stories';
import { Table } from '../../components/table/table.component';
import { Nav } from '../../components/nav/nav.stories';
import { Subtitle, Title } from '../../components/text/text.stories';
import { Screen } from '../../components/screen/screen.stories';
import { useEffect, useState } from 'react';
const data = {

}

const CommodityComponent = () => {
    const [screenState, setScreenState] = useState(false)

    const screenFlag = () => { setScreenState(true) }

    return <App
        style={{ gridTemplateColumns: '95% 5%' }}>

        <ContainerPad
            style={{ padding: '3vh 2vw', gap: '2vh' }}
            config={{ ghost: true }}>

            <ContainerPad style={{ width: 'fit-content' }}>

                <Subtitle style={{ textAlign: 'left', padding: '0 1vw' }} data={{
                    label: "Commodity"
                }} />

            </ContainerPad>

            <ContainerPad>

                <Table config={{ actionables: 'right' }} data={data} />

            </ContainerPad>

        </ContainerPad>

        <ContainerPad style={{ padding: '3vh .6vw' }} config={{ ghost: true }}>
            <Nav
                style={{ justifyContent: 'space-betweem' }}
                data={{
                    containers: {
                        commodity: 'equalizer',
                        logout: 'logout'
                    }
                }}
                childrenStyle={{ buttons: { borderRadius: '.5vw' } }}

            />
        </ContainerPad>

        {/* <Screen
            config={{ screenState: !screenState }}
            events={{ onMouseOver: screenFlag }}
        />

        <Screen
            config={{ screenState }}
        >
            <Nav
                style={{ zIndex: '1' }}
                data={{
                    containers: {
                        commodity: 'equalizer',
                        logout: 'logout'
                    }
                }}
            />

        </Screen> */}
    </App >

}

export default CommodityComponent