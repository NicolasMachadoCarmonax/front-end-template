import React from 'react';
import { ButtonComponent } from './button.component.jsx';
import classes from './button.module.scss'

export default {
    title: 'App/Button',
    component: ButtonComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Button = (props) => <ButtonComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap }, ...props?.borderRadius && { borderRadius: variables?.boxBorderRadius }, ...props?.justify && { justifyContent: props?.justify }, ...props?.align && { alignItems: props?.align }, ...props?.alignSelf && { alignSelf: props?.alignSelf }, ...props?.alignSelf && { justifySelf: props?.justifySelf } }} className={`${classes.button} ${props?.className}`}/>

export const ButtonBorder = (props) => <ButtonComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap }, ...props?.borderRadius && { borderRadius: variables?.boxBorderRadius }, ...props?.justify && { justifyContent: props?.justify }, ...props?.align && { alignItems: props?.align }, ...props?.alignSelf && { alignSelf: props?.alignSelf }, ...props?.alignSelf && { justifySelf: props?.justifySelf } }} className={`${classes.button} ${classes.buttonBorder} ${props?.className}`}/>


export const MidButtonSmallBorder = (props) => <ButtonComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap }, ...props?.borderRadius && { borderRadius: variables?.boxBorderRadius }, ...props?.justify && { justifyContent: props?.justify }, ...props?.align && { alignItems: props?.align }, ...props?.alignSelf && { alignSelf: props?.alignSelf }, ...props?.alignSelf && { justifySelf: props?.justifySelf } }} className={`${classes.button} ${classes.smallBorder} ${classes.mid} ${props?.className}`}/>

export const ButtonSmallBorder = (props) => <ButtonComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap }, ...props?.borderRadius && { borderRadius: variables?.boxBorderRadius }, ...props?.justify && { justifyContent: props?.justify }, ...props?.align && { alignItems: props?.align }, ...props?.alignSelf && { alignSelf: props?.alignSelf }, ...props?.alignSelf && { justifySelf: props?.justifySelf } }} className={`${classes.button} ${classes.smallBorder} ${props?.className}`}/>


export const MidButton = (props) => <ButtonComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row } }} className={`${classes.button} ${classes.mid} ${props?.className}`}/>

export const NavButton = (props) => <ButtonComponent className={`${classes.button} ${classes.navButton} ${props?.className}`} {...props} />

