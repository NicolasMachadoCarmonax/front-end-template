import { LineComponent } from "./line.component";
import classes from './line.module.scss'

export const Line = (props) => <LineComponent {...props} className={`${classes.line} ${props?.className}`} />