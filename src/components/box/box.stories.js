import React from 'react';
import { BoxComponent } from './box.component.jsx';
import classes from './box.module.scss'
import variables from '../../styles/global.module.scss';

export default {
    title: 'App/Box',
    component: BoxComponent,
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#122247' },
            ],
        },
    }
}

export const Wrap = (props) => <BoxComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap }, ...props?.borderRadius && { borderRadius: variables?.boxBorderRadius }, ...props?.justify && { justifyContent: props?.justify }, ...props?.align && { alignItems: props?.align }, ...props?.alignSelf && { alignSelf: props?.alignSelf }, ...props?.alignSelf && { justifySelf: props?.justifySelf } }} className={`${classes.box} ${classes.wrap} ${props?.className} ${props?.animation == 'opacity' && classes.preOpacity}`} />

export const VerticalSpace = (props) => <BoxComponent {...props} className={`${classes.box} ${classes.wrap} ${classes.verticalSpace} ${props?.className}`} />

export const Grid = (props) => <BoxComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap } }} className={`${classes.box} ${props?.className} ${props?.animation == 'opacity' && classes.preOpacity}`} />

export const BlankGrid = (props) => <BoxComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap } }} className={`${classes.box} ${classes.blank} ${props?.className}`} />

export const BlankFlex = (props) => <BoxComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap } }} className={`${classes.box} ${classes.horizontalFlex} ${props?.className}`} />;

export const Flex = (props) => <BoxComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap }, ...props?.borderRadius && { borderRadius: variables?.boxBorderRadius }, ...props?.justify && { justifyContent: props?.justify }, ...props?.align && { alignItems: props?.align }, ...props?.alignSelf && { alignSelf: props?.alignSelf }, ...props?.alignSelf && { justifySelf: props?.justifySelf } }}  className={`${classes.box} ${classes.horizontalFlex} ${props?.className}`} />;

export const BlankVFlex = (props) => <BoxComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap }, ...props?.borderRadius && { borderRadius: variables?.boxBorderRadius }, ...props?.justify && { justifyContent: props?.justify }, ...props?.align && { alignItems: props?.align }, ...props?.alignSelf && { alignSelf: props?.alignSelf }, ...props?.alignSelf && { justifySelf: props?.justifySelf } }}  className={`${classes.box} ${classes.verticalFlex} ${props?.className}`} />;

export const VFlex = (props) => <BoxComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap }, ...props?.borderRadius && { borderRadius: variables?.boxBorderRadius }, ...props?.justify && { justifyContent: props?.justify }, ...props?.align && { alignItems: props?.align }, ...props?.alignSelf && { alignSelf: props?.alignSelf }, ...props?.alignSelf && { justifySelf: props?.justifySelf } }} className={`${classes.box} ${classes.verticalFlex} ${props?.className}`} />

export const Empty = (props) => <BoxComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap } }} className={`${classes.box} ${classes.empty} ${props?.className}`} />

export const Scroll = (props) => <BoxComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row }, ...props?.gap && { gap: props?.gap } }} className={`${classes.box} ${classes.scroll} ${props?.className}`} />
