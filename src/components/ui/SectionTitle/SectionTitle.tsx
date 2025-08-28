import React from 'react';
import {Text} from 'react-native';

import {styles} from "./styles";
import {SectionTitleProps} from "./types";


const SectionTitle = ({title, style}: SectionTitleProps) => {
    return <Text style={[styles.title, style]}>{title}</Text>;
};


export default SectionTitle;
