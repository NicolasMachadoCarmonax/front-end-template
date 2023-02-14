import React, { useState } from 'react';
import { Button } from '../button/button.stories';
import { ButtonText } from '../text/text.stories';

export const DropdownComponent = (props) => {
    const [dropdownFlag, setDropdownFlag] = useState(false)
    return <Button {...props}>
        <ButtonText style={props?.childrenStyle?.buttonText}>{props?.data?.label}</ButtonText>
    </Button>

}