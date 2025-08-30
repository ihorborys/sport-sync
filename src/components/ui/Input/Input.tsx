import React from 'react';
import {TextInput} from 'react-native';
import {InputProps} from "@components/ui/Input/types";
import {styles} from "./styles";


export const Input = ({style, ...props}: InputProps) => {
    return (
        <TextInput
            style={[styles.input, style]}
            placeholder="name@email.com"
            placeholderTextColor="#8F9098"
            {...props}
        />
    );
};


export default Input;
