import { App, AppPad } from '../../components/app/app.stories';
import { Container, ContainerPad } from '../../components/container/container.stories';
import { Table } from '../../components/table/table.component';
import { Nav, NavPad } from '../../components/nav/nav.stories';
import { Subtitle, Title } from '../../components/text/text.stories';
import { Drawer } from '@/components/drawer/drawer.stories';
import { variables } from '../../styles/global.module.scss';

const CommodityComponent = () => {

    console.log(variables)
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

        <Drawer
        >
            <Nav
                style={{ padding: '3vh .5vw', justifyContent: 'space-between', gap: '2vh' }}
                data={{
                    containers: {
                        commodity: 'equalizer',
                        logout: 'logout'
                    }
                }}
                childrenStyle={{
                    buttons: { border: 'none', borderRadius: '.4vw', height: '3.5vw' }
                }}
            />
        </Drawer>
    </App >

}

export default CommodityComponent