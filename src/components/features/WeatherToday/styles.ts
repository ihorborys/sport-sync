import {StyleSheet} from "react-native";
import {COLORS} from "@/src/constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: COLORS.black,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
    },
    temperature: {
        fontSize: 20,
    },
    description: {
        fontSize: 18,
        fontStyle: "italic",
    }
});