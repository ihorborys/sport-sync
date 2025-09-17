import {View} from "react-native";
import {styles} from "./styles";
import React from "react";
import BaseText from "@components/ui/BaseText/BaseText";
import Logo from "@components/ui/Logo/Logo";

const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <Logo width={"100"} height={"118"}></Logo>
            <BaseText>ProfileScreen</BaseText>
        </View>
    );
};

export default ProfileScreen;
