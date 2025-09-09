import {StyleSheet} from "react-native";
import {COLORS} from "@/src/constants/colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        // borderWidth: 1,
        borderColor: COLORS.black,
        fontFamily: "Calibri",
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