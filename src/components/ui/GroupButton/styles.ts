import {StyleSheet} from "react-native";
import {COLORS} from "@/src/constants/colors";

export const styles = StyleSheet.create({
    btn: {
        borderWidth: 1.5,
        borderColor: COLORS.primary,
        borderRadius: 50,
        paddingVertical: 18,
        paddingHorizontal: 20,
        marginBottom: 50,
    },
    btnText: {
        color: COLORS.primary,
        fontWeight: "800",
        fontSize: 21,
    },
});