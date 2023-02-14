import { BlankGrid, Empty, Flex, Grid, VFlex, Wrap } from "@/components/box/box.stories"
import { ButtonBorder } from "@/components/button/button.stories"
import { Input } from "@/components/input/input.stories"
import { Loading } from "@/components/loading/loading.stories"
import { Logo } from "@/components/logo/logo.stories"
import { Page } from "@/components/page/page.stories"
import { BlackTitle, Title } from "@/components/text/text.stories"

export const LoadingPageComponent = (props) => {
    return <Page {...props}>
        <Loading/>
    </Page>
}