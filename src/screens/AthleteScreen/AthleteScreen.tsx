import {View} from "react-native";
import Logo from "@components/ui/Logo/Logo";
import React from "react";
import BaseText from "@components/ui/BaseText/BaseText";
import {styles} from "./styles";

const AthleteScreen = () => {

    return (
        <View style={styles.container}>
            <Logo width={"100"} height={"118"}></Logo>
            <BaseText>AthleteScreen</BaseText>
        </View>
    );
};

export default AthleteScreen;
