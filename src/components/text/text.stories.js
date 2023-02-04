import { React } from 'react';
import { TextComponent } from './text.component.jsx';
import classes from './text.module.scss';
  
export default {
    title: 'App/Text',
    component: TextComponent
}

export const Text = (props) => <TextComponent className={`${classes.text} ${props?.className}`} {...props} />;


export const Title = (props) => <TextComponent className={`${classes.text} ${classes.title} ${props?.className}`} {...props} />;

export const Subtitle = (props) => <TextComponent className={`${classes.text} ${classes.subtitle} ${props?.className}`} {...props} />;


export const ButtonText = (props) => <TextComponent className={`${classes.text} ${classes.color} ${props?.className}`} {...props} />;
