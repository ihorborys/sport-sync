import React from 'react';
import {Text} from 'react-native';
import {PlainTextProps} from "@components/ui/BaseText/types";
import {styles} from "@components/ui/BaseText/styles";


const BaseText: React.FC<PlainTextProps> = ({children, style, ...rest}) => {
    return (
        <Text style={[styles.text, style]} {...rest}>
            {children}
        </Text>
    );
};


export default BaseText;
