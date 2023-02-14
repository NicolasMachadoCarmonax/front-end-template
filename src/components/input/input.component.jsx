import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import { Flex } from '../box/box.stories';
import classes from './input.module.scss'

export const InputComponent = (props) => {
   return <input {...props}/>

}