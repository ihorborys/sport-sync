import React from "react";
import {TouchableOpacity, Text} from "react-native";
import {IPrimaryButtonProps} from "./types";
import {styles} from "./styles";


const PrimaryButton = ({title, onPress}: IPrimaryButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn} activeOpacity={0.4}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}


export default PrimaryButton;