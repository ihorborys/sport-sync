import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from "./styles";
import {IGroupButtonProps} from "./types";


const GroupButton = ({title, onPress}: IGroupButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn} activeOpacity={0.4}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default GroupButton;
