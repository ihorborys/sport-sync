import {Alert, SafeAreaView, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import PrimaryButton from "@components/ui/PrimaryButton/PrimaryButton";
import Logo from "@components/ui/Logo/Logo";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import {HomeScreenNavigationProp} from "@/src/screens/HomeScreen/types";
import {styles} from "./styles";
import React from "react";
import Input from "@components/ui/Input/Input";
import PressableText from "@components/ui/PressableText/PressableText";

const AuthorisationScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Logo width={"100"} height={"118"}></Logo>
                <View style={styles.titleContainer}>
                    <SectionTitle
                        title={"Welcome!"}
                        style={styles.title}
                    ></SectionTitle>
                </View>
                <Input style={styles.input} placeholder={"Email Address"}></Input>
                <Input style={styles.input} placeholder={"Password"}></Input>
                <PressableText
                    text="Forgot password?"
                    onPress={() => Alert.alert("Forgot Password Functionality")}
                    // textStyle={{fontWeight: "500"}}
                />

                <PrimaryButton
                    title={"Login"}
                    onPress={() => navigation.navigate("Roles")}
                ></PrimaryButton>
            </View>
        </SafeAreaView>
    );
};

export default AuthorisationScreen;
