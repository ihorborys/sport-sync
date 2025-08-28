import {StyleSheet, Text, View} from "react-native";

import GroupButton from "@/src/components/ui/GroupButton/GroupButton";
import Input from "@/src/components/ui/Input/Input";
import Logo from "@components/ui/Logo/Logo";
import PrimaryButton from "@/src/components/ui/PrimaryButton/PrimaryButton";
import SectionTitle from "@/src/components/ui/SectionTitle/SectionTitle";

export default function Index() {
    return (
        <View style={styles.container}>
            <Logo width={"200"} height={"236"}></Logo>
            <SectionTitle title={"Your Groups"}></SectionTitle>
            <GroupButton title={"Group 2015 A"} onPress={() => console.log('Pressed')}></GroupButton>
            <Input></Input>
            <PrimaryButton title={"Next"} onPress={() => console.log('Pressed')}></PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 24,
        marginTop: 50,
    },
});
