import EqualizerRounded from '@mui/icons-material/EqualizerRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Button } from "../button/button.stories";
import variables from '../../styles/global.module.scss';
import { Wrap } from '../box/box.stories';

// Maps modules object passed from page component
export const mapNavModules = (props) => {
    const { containers } = props; // modules passed on from page component
    const modulesJSX = [] // array for JSX module elements 
    Object
        .keys(containers)
        .forEach((route, key) => {
            let iconJSX;
            const fontSize = '2vw'; //?
            switch (containers[route]) {
                case 'equalizer':
                    iconJSX = <EqualizerRounded sx={{ fontSize, pointerEvents: 'none' }} />
                    break
                case 'logout':
                    iconJSX = <LogoutRoundedIcon sx={{ fontSize, pointerEvents: 'none' }} />
                    break
            }
            modulesJSX.push(
                <Button style={props?.style} key={key}>
                    {iconJSX}
                </Button>
            )
        }) // creates JSX module elements and pushes to modulesJSX
    return modulesJSX
}

export const animationEntry = (props) => {
    const { setNavFlag, ref } = props;

    setNavFlag(true)

    document.querySelector('body').style.cursor = 'pointer';
    const nav = ref?.current;

    nav.style.backgroundColor = variables.darkBaseColor
}