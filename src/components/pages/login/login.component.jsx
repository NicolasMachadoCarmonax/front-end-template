import { login, authenticate } from "@/api/api"
import { BlankGrid, Empty, Flex, Grid, VFlex, Wrap } from "@/components/box/box.stories"
import { ButtonBorder } from "@/components/button/button.stories"
import { Input } from "@/components/input/input.stories"
import { Logo } from "@/components/logo/logo.stories"
import { Page } from "@/components/page/page.stories"
import { BlackTitle } from "@/components/text/text.stories";
import { usePlug } from "@/plugs/plugs"

export const LoginComponent = (props) => {
    const auth = usePlug({ key: 'auth', payload: { roles: 'all' } })

    return auth === 'logged-allowed' && <Page animation={'opacity'}>
        <BlankGrid columns={'32.5% 35% 32.5%'} rows={'10% 80% 10%'} >
            <Grid columns={'6% 88% 6%'} rows={'5% 35% 60%'} column={'2 / 3'} row={' 2 / 3'}>
                <Empty column={' 1 / 2 '} row={'1 / 2'} />
                <VFlex justify={'start'} column={'2 / 3'} row={'2 / 3'} gap={'2vh'} >
                    <Logo />
                    <BlackTitle style={{ alignSelf: 'center' }}>Iniciar Sesión</BlackTitle>
                </VFlex>
                <Grid rows={'15% 15% 33% 15%'} column={'2 / 3'} row={'3 / 4'} gap={'2vh'} >
                    <Flex ><Input placeholder={'Correo electrónico'} type={'text'} /></Flex>
                    <Flex><Input placeholder={'Contraseña'} type={'password'} /></Flex>
                    <Empty />
                    <Grid columns={'60% 40%'}>
                        <ButtonBorder column={'2 / 3'}>Iniciar Sesión</ButtonBorder>
                    </Grid>
                </Grid>
            </Grid>
        </BlankGrid>
    </Page>
}