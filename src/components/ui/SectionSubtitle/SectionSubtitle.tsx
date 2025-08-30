import React from 'react';
import {Text} from 'react-native';
import {styles} from "./styles";
import {SectionSubTitleProps} from "./types";


const SectionSubtitle = ({title, style}: SectionSubTitleProps) => {
    return <Text style={[styles.title, style]}>{title}</Text>;
};


export default SectionSubtitle;
