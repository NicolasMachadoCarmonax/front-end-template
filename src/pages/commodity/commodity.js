import { App, AppPad } from '../../components/app/app.stories';
import { Container, ContainerPad } from '../../components/container/container.stories';
import { Table } from '../../components/table/table.component';
import { Nav } from '../../components/nav/nav.stories';
import { Subtitle, Title } from '../../components/text/text.stories';
const data = {

}

const CommodityComponent = () => {
    return <App style={{gridTemplateColumns: '96% 4%'}}>
        <ContainerPad style={{padding: '3vh 2vw', gap: '2vh' }} config={{ ghost: true }}>

            <ContainerPad style={{width: 'fit-content'}}>

                <Subtitle style={{textAlign: 'left', padding: '0 1vw'}} data={{
                    label: "Commodity"
                }} />

            </ContainerPad>

            <ContainerPad>

                <Table config={{ actionables: 'right' }} data={data} />

            </ContainerPad>

        </ContainerPad>
        <Nav
            data={{
                containers: {
                    commodity: 'equalizer',
                    logout: 'logout'
                }
            }}
        />
    </App >


}

export default CommodityComponent