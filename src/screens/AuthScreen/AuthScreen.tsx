import {Alert, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import PrimaryButton from "@components/ui/PrimaryButton/PrimaryButton";
import Logo from "@components/ui/Logo/Logo";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import {styles} from "./styles";
import React from "react";
import Input from "@components/ui/Input/Input";
import PressableText from "@components/ui/PressableText/PressableText";
import BaseText from "@components/ui/BaseText/BaseText";
import {AuthScreenNavigationProp} from "@/src/screens/AuthScreen/types";

const AuthScreen = () => {
    const navigation = useNavigation<AuthScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Logo width={"100"} height={"118"}></Logo>
            <View style={styles.inputSection}>
                <SectionTitle
                    title={"Welcome!"}
                    style={styles.title}
                ></SectionTitle>
                <Input style={styles.input} placeholder={"Email Address"}></Input>
                <Input style={styles.input} placeholder={"Password"}></Input>
                <PressableText
                    text="Forgot password?"
                    onPress={() => Alert.alert("Forgot password functionality")}
                    containerStyle={{width: "100%"}}
                />
            </View>
            <PrimaryButton
                title={"Login"}
                onPress={() => navigation.navigate("Roles")}
            ></PrimaryButton>
            <View style={styles.socialsSection}>

                <View style={styles.registerText}>
                    <BaseText>Not a member?</BaseText>
                    <PressableText
                        text="Register now"
                        onPress={() => Alert.alert("Register now Functionality")}
                        containerStyle={{paddingLeft: 10}}
                    />
                </View>


            </View>
        </View>
    );
};

export default AuthScreen;
