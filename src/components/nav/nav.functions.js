import { Flex } from "../container/container.stories";
import EqualizerRounded from '@mui/icons-material/EqualizerRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Icon } from "@mui/material";

// Maps module object from passed from page component
export const mapNavModules = (props) => {
    const modulesJSX = [] // array for JSX module elements 
    const { modules } = props; // modules passed on from page component
    Object
    .keys(modules)
    .map((route,key) => {
        let iconJSX;
        switch(modules[route]){
            case 'equalizer':
                iconJSX = <EqualizerRounded />
                break
            case 'log-out':
                iconJSX = <EqualizerRounded />
                break
        }
        modulesJSX.push(
        <>
        <Flex id="1" onClick={console.log(`/${route}`)} key={key}>
            <Icon>
                {iconJSX}
            </Icon>
        </Flex>
        <Flex id="2" onClick={console.log(`/${route}`)} key={key}>
        <Icon>
            {iconJSX}
        </Icon>
    </Flex>
    </>
        )
    }) // creates JSX module elements and pushes to modulesJSX
    console.log(modulesJSX)
    return modulesJSX
}