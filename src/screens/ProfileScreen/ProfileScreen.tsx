import {SafeAreaView, View} from "react-native";

import {styles} from "./styles";
import React from "react";
import BaseText from "@components/ui/BaseText/BaseText";

const ProfileScreen = () => {

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <BaseText>ProfileScreen</BaseText>
            </View>
        </SafeAreaView>

    );
};

export default ProfileScreen;
