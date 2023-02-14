import React, { forwardRef } from 'react';
import { LoginComponent } from './login.component.jsx';
import classes from './nav.module.scss';

export default {
    title: 'Pages/Login',
    component: LoginComponent,
}

export const Login = (props) => <LoginComponent {...props}/>