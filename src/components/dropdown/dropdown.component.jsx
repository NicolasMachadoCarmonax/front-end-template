import React, { useState } from 'react';
import { Button } from '../button/button.stories';
import { ButtonText, Text } from '../text/text.stories';
import classes from './dropdown.module.scss';

export const DropdownComponent = (props) => {
    const { data, config, events, style, className, children } = props

    const [dropdownFlag, setDropdownFlag] = useState(false)

    return <Button className={classes.dropdown} style={style}>
        <ButtonText>{data?.label}</ButtonText>
    </Button>

}