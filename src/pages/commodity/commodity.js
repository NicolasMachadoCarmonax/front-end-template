import { App } from '../../components/app/app.stories';
import { Module, Header, Section } from '../../components/container/container.stories';
import { NavRounded } from '../../components/nav/nav.stories';
import { Title } from '../../components/text/text.stories';


const CommodityComponent = () => {


    return <App config={{ nav: true }} >
        <NavRounded config={{
            modules: {
                commodity: 'equalizer',
                logout: 'logout'
            }
        }} />
        <Module>
            <Header>
                <Title title="Commodity" />
            </Header>
            <Section>

            </Section>
        </Module>
    </App >


}

export default CommodityComponent