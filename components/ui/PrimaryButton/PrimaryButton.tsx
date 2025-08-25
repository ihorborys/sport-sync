import React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {ICustomButtonProps} from "@/components/ui/PrimaryButton/types";
import {styles} from "@/components/ui/PrimaryButton/styles";


const PrimaryButton = ({title, onPress}: ICustomButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn} activeOpacity = {0.8}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}


export default PrimaryButton;