import Image from "next/image"
import logo from '../../../public/resources/logo.jpg'
import { Flex } from "../box/box.stories"

export const LogoComponent = (props) => {
    return <Image {...props} src={logo} alt="logo" width={1000} height={1000} />
}