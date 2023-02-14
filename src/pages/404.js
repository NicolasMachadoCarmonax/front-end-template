import { BlankGrid, Empty, Flex, Grid, VFlex } from "@/components/box/box.stories"
import { MidButtonSmallBorder } from "@/components/button/button.stories"
import { Logo } from "@/components/logo/logo.stories"
import { Page } from "@/components/page/page.stories"
import { BlackTitle } from "@/components/text/text.stories"

const NotFoundPage = () => {
    return <Page animation={'opacity'}>
        <BlankGrid columns={'30% 40% 30%'} rows={'30% 40% 30%'}>
            <Grid columns={'25% 50% 25%'} rows={'5% 50% 5% 35% 5%'} column={'2 / 3'} row={'2 / 3'}>
                <Empty column={'1 / 4'} row={'1 / 2'} />
                <VFlex column={'2 / 3'} row={'2 / 3'} gap={'2vh'} >
                    <Logo />
                    <BlackTitle>Página no encontrada</BlackTitle>
                </VFlex>
                <Empty />
                <Flex column={'2 / 3'} row={'4 / 5'}>
                    <MidButtonSmallBorder to={'/iniciar-sesión'} column={'2 / 3'} row={'3 / 4'}>Página principal</MidButtonSmallBorder>
                </Flex>
            </Grid>
        </BlankGrid>
    </Page>
}

export default NotFoundPage