import React from 'react';
import {Text} from 'react-native';
import {SectionTitleProps} from "./types";
import {styles} from "./styles";


const SectionTitle = ({title, style}: SectionTitleProps) => {
    return <Text style={[styles.title, style]}>{title}</Text>;
};


export default SectionTitle;
