import {StyleSheet, Text, View} from "react-native";
import PrimaryButton from "@/src/components/ui/PrimaryButton/PrimaryButton";
import Input from "@/src/components/ui/Input/Input";

export default function Index() {
    return (
        <View style={styles.container}>
            <Input></Input>
            <PrimaryButton title={"Next"} onPress={() => console.log('Pressed')}></PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
    },
});
