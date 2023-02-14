import { React } from 'react';
import { TextComponent } from './text.component.jsx';
import classes from './text.module.scss';

export default {
    title: 'App/Text',
    component: TextComponent
}

export const Text = (props) => <TextComponent {...props} className={`${classes.text} ${props?.className}`} />;

export const Bold = (props) => <TextComponent {...props} className={`${classes.text} ${classes.bold} ${props?.className}`} />;

export const Title = (props) => <TextComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row } }} className={`${classes.text} ${classes.title} ${props?.className}`} />;

export const BlackTitle = (props) => <TextComponent {...props} style={{ ...props?.style, ...props?.columns && { gridTemplateColumns: props?.columns }, ...props?.rows && { gridTemplateRows: props?.rows }, ...props?.column && { gridColumn: props?.column }, ...props?.row && { gridRow: props?.row } }} className={`${classes.text} ${classes.title} ${classes.blackTitle} ${props?.className}`} />;

export const Subtitle = (props) => <TextComponent {...props} className={`${classes.text} ${classes.subtitle} ${props?.className}`} />;


export const ButtonText = (props) => <TextComponent {...props} className={`${classes.text} ${classes.buttonText} ${props?.className}`} />;