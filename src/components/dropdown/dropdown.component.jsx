import React, { useState } from 'react';
import { Button } from '../button/button.stories';
import { ButtonText } from '../text/text.stories';

export const DropdownComponent = (props) => {
    const [dropdownFlag, setDropdownFlag] = useState(false)
    return <Button {...props}>
        <ButtonText>{props?.data?.label}</ButtonText>
    </Button>

}