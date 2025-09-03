import {SafeAreaView, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import PrimaryButton from "@components/ui/PrimaryButton/PrimaryButton";
import Logo from "@components/ui/Logo/Logo";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import SectionSubtitle from "@components/ui/SectionSubtitle/SectionSubtitle";
import {HomeScreenNavigationProp} from "@/src/screens/HomeScreen/types";
import {styles} from "./styles";
import React from "react";

const RolesScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <SafeAreaView style={styles.safeAreaView}>
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
                            onPress={() => navigation.navigate("Roles")
                            }
                        ></PrimaryButton>
                        <PrimaryButton
                            buttonStyle={styles.btnStyle}
                            textStyle={styles.btnTextStyle}
                            title={"athlete"}
                            onPress={() => navigation.navigate("Roles")}
                        ></PrimaryButton>
                    </View>
                </View>

                <PrimaryButton
                    title={"Next"}
                    onPress={() => navigation.navigate("Roles")}
                ></PrimaryButton>
            </View>
        </SafeAreaView>
    );
};

export default RolesScreen;
