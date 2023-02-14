import React from 'react';
import { VFlex } from '../box/box.stories';
import variables from '../../styles/global.module.scss'
import { useRouter } from 'next/router';

export const ButtonComponent = (props) => {
    // const router = useRouter()

    // typeof window ? props?.to && router.push('/') : null;

    return <button
        {...props}
        onClick={(ref) => { ref.target.style.boxShadow = 'none' }}
        onMouseOver={(ref) => { ref.target.style.boxShadow = variables?.buttonHoverBoxShadow }} onMouseLeave={(ref) => { ref.target.style.boxShadow = 'none' }}  {...props}
    >
        {props?.children}
    </button >
}