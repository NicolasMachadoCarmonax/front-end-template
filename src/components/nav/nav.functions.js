import EqualizerRounded from '@mui/icons-material/EqualizerRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { NavButton } from "../button/button.stories";
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
                    iconJSX = <EqualizerRounded sx={{ color: variables?.highlightColor, fontSize, pointerEvents: 'none' }} />
                    break
                case 'logout':
                    iconJSX = <LogoutRoundedIcon sx={{ color: variables?.highlightColor, fontSize, pointerEvents: 'none' }} />
                    break
            }
            modulesJSX.push(
                <NavButton
                    // events={{
                    //     onMouseOver: (ref) => { ref.current.style.position }
                    // }} 
                    style={props?.style}
                    key={key}>
                    {iconJSX}
                </NavButton>
            )
        }) // creates JSX module elements and pushes to modulesJSX
    return modulesJSX
}
