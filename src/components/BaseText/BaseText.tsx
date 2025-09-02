import React from 'react';
import {Text} from 'react-native';
import {PlainTextProps} from "@components/BaseText/types";
import {styles} from "@components/BaseText/styles";


const BaseText: React.FC<PlainTextProps> = ({children, style, ...rest}) => {
    return (
        <Text style={[styles.text, style]} {...rest}>
            {children}
        </Text>
    );
};


export default BaseText;
