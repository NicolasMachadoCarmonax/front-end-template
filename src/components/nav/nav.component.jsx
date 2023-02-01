import React, { useRef } from 'react';
import classes from './nav.module.scss';
import { mapNavModules, onNavOut, onNavOver } from './nav.functions';
import { VerticalFlex } from '../container/container.stories';
import { useRecoilState } from 'recoil';
import { navFlagState } from './nav.state';

export const NavComponent = (props) => {
    const { config, events, styles, children } = props
    const { modules } = config
    const [navFlag, setNavFlag] = useRecoilState(navFlagState);
    const navRef = useRef()

    return <div
        onMouseOver={() => { onNavOver({ setNavFlag, navRef }) }}
        onMouseOut={() => { onNavOut({ setNavFlag, navRef }) }}
        ref={navRef}
        className={classes.nav}
        style={styles}
    >
        {navFlag ?
            <VerticalFlex styles={{ justifyContent: 'flex-start', height: '90vh', gap: '2vh', pointerEvents: 'none' }}>{mapNavModules({ modules })}</VerticalFlex>
            :
            <></>
        }

    </div>
}