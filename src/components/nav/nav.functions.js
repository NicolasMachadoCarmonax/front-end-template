import EqualizerRounded from '@mui/icons-material/EqualizerRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { NavButton } from "../button/button.stories";

// Maps modules object passed from page component
export const mapNavModules = (props) => {
    const modulesJSX = [] // array for JSX module elements 
    const { modules } = props; // modules passed on from page component
    Object
        .keys(modules)
        .map((route, key) => {
            let iconJSX;
            const fontSize = '2vw'; // icon's width
            switch (modules[route]) {
                case 'equalizer':
                    iconJSX = <EqualizerRounded sx={{ fontSize }} />
                    break
                case 'logout':
                    iconJSX = <LogoutRoundedIcon sx={{ fontSize }} />
                    break
            }
            modulesJSX.push(
                <NavButton onClick={console.log(`/${route}`)} key={key}>
                    {iconJSX}
                </NavButton>
            )
        }) // creates JSX module elements and pushes to modulesJSX
    return modulesJSX
}

export function onNavOver(props) {
    const { setNavFlag, navRef } = props;

    setNavFlag(true)
    document.querySelector('body').style.cursor = 'pointer';

    const nav = navRef?.current;
    nav.style.backgroundColor = 'rgb(3, 13, 37)'
    nav.style.left = '93vw'
    nav.style.width = '7vw'

}

export function onNavOut(props) {
    const { setNavFlag, navRef } = props;

    setNavFlag(false)
    document.querySelector('body').style.cursor = 'initial';

    const nav = navRef?.current;
    nav.style.backgroundColor = 'transparent'
    nav.style.left = '96vw'
    nav.style.width = '4vw'

}