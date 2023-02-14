import LoadingComponent from "./loading.component";
import classes from './loading.module.scss';

export const Loading = (props) => <LoadingComponent {...props} className={`${classes.loading} ${props?.className}`} />