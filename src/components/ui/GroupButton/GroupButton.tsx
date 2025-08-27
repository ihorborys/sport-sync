import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {IGroupButtonProps} from "./types";
import {styles} from "./styles";

export default function GroupButton({title, onPress}: IGroupButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn} activeOpacity={0.4}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    );
}


