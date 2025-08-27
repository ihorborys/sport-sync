import {StyleSheet, Text, View} from "react-native";
import PrimaryButton from "@/src/components/ui/PrimaryButton/PrimaryButton";
import Input from "@/src/components/ui/Input/Input";
import SectionTitle from "@/src/components/ui/SectionTitle/SectionTitle";
import GroupButton from "@/src/components/ui/GroupButton/GroupButton";

export default function Index() {
    return (
        <View style={styles.container}>
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
        // justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
        marginTop: 50,
    },
});
