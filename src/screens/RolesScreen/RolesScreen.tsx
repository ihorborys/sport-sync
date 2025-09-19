import {View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import PrimaryButton from "@components/ui/PrimaryButton/PrimaryButton";
import Logo from "@components/ui/Logo/Logo";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import SectionSubtitle from "@components/ui/SectionSubtitle/SectionSubtitle";
import {styles} from "./styles";
import React from "react";
import {RolesScreenNavigationProp} from "@/src/screens/RolesScreen/types";

const RolesScreen = () => {
    const navigation = useNavigation<RolesScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Logo width={"200"} height={"236"}></Logo>
            <View style={styles.titleContainer}>
                <SectionTitle
                    title={"Choose Your Role"}
                    style={styles.title}
                ></SectionTitle>
                <SectionSubtitle
                    title={
                        "Who are You ?"
                    }
                    style={styles.subTitle}
                ></SectionSubtitle>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton
                        buttonStyle={styles.btnStyle}
                        textStyle={styles.btnTextStyle}
                        title={"coach"}
                        onPress={() => navigation.navigate("CoachTabs", {userId: "1"})
                        }
                    ></PrimaryButton>
                    <PrimaryButton
                        buttonStyle={styles.btnStyle}
                        textStyle={styles.btnTextStyle}
                        title={"player"}
                        onPress={() => navigation.navigate("PlayerTabs", {userId: "2"})}
                    ></PrimaryButton>
                </View>
            </View>
        </View>
    );
};

export default RolesScreen;
