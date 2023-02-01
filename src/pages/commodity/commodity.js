import { BaseApp, NavApp } from '../../components/app/app.stories';
import { Module, Header, Section } from '../../components/container/container.stories';
import { BaseNav } from '../../components/nav/nav.stories';
import { Title } from '../../components/text/text.stories';

const CommodityComponent = () => {

    return <NavApp>
        <BaseNav modules={{
            commodity: 'equalizer',
            farms: 'equalizer'
        }}/>
        <Module>
            <Header>
                <Title title='Commodity'></Title>
            </Header>
            <Section/>
        </Module>
    </NavApp>

}

export default CommodityComponent