import { Box, Empty } from "../../components/box/box.stories"
import { Drawer } from "../../components/drawer/drawer.stories"
import { Pad } from "../../components/pad/pad.stories"
import { Subtitle, Title } from "../../components/text/text.stories"
import { App } from "../../components/app/app.stories"
import { Wrap } from "../../components/box/box.stories"
import { Table } from "../../components/table/table.stories"
import { Nav } from "../../components/nav/nav.stories"

const CommodityComponent = () => {
    return <App style={{ gridTemplateColumns: '95% 5%' }}>
        <Wrap >
            {/* Module */}
            <Wrap style={{ gridTemplateRows: '7% 2% 91%' }}>
                {/* Header - 10 */}
                <Box style={{ width: 'fit-content' }}>
                    <Title style={{ padding: '0 1.2vw' }}>Commodity</Title>
                </Box>
                <Empty />
                {/* Section - 90*/}
                <Box>
                    <Wrap>
                        <Table config={{ actionables: 'right' }} />
                    </Wrap>
                </Box>

            </Wrap>

            {/* Nav */}
        </Wrap>
        <Drawer>
            <Nav
                style={{ justifyContent: 'flex-start', padding: '3vh 0', gap: '2vh' }}
                events={{
                    onClick: (ref) => { console.log(ref); ref.target.style.justifyContent = 'space-between' }
                }}
                data={{
                    containers: {
                        commodity: 'equalizer',
                        logout: 'logout'
                    }
                }}
                childrenStyle={{
                    buttons: { border: 'none', borderRadius: '.4vw', height: '3vw', width: '3vw' }
                }}
            />
        </Drawer>
    </App>
}

export default CommodityComponent