import { App, AppPad } from '../../components/app/app.stories';
import { Container, ContainerPad } from '../../components/container/container.stories';
import { Table } from '../../components/table/table.component';
import { NavPad } from '../../components/nav/nav.stories';
import { Subtitle, Title } from '../../components/text/text.stories';
import { Drawer } from '@/components/drawer/drawer.stories';

const CommodityComponent = () => {
    return <App
        style={{ gridTemplateColumns: '95% 5%' }}>

        <ContainerPad
            style={{ padding: '3vh 2vw', gap: '2vh' }}
            config={{ ghost: true }}>

            <ContainerPad
             style={{ width: 'fit-content' }}
             >
                <Title 
                style={{ padding: '0 1vw' }} 
                data={{
                    label: "Commodity"
                }} 
                />
            </ContainerPad>

            <ContainerPad>
                <Table config={{ actionables: 'right' }} data={{}} />
            </ContainerPad>

        </ContainerPad>

        <Drawer>
        <NavPad
            style={{ justifyContent: 'space-between', gap: '2vh' }}
            data={{
                containers: {
                    commodity: 'equalizer',
                    logout: 'logout'
                }
            }}
            childrenStyle={{ containerPad: { padding: '3vh .6vw' }, buttons: { backgroundColor: '#fff', borderRadius: '.5vw' } }}
        />
        </Drawer>
    </App >

}

export default CommodityComponent