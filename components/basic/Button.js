import React from 'react';
import { Button } from 'react-native';

export const StyledButton = ({onPress, title, color, enabled = true, style}) => {
    return <Button
        onPress = {onPress}
        title={title}
        color={color? color : "#841584"}
        style={{...style, paddingLeft:10, paddingRigth:10}}
        disabled={!enabled}
    />
}