import {StyleSheet} from "react-native";
import {COLORS} from "@/src/constants/colors";

export const styles = StyleSheet.create({
    btn: {
        width: "100%",
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: "center",
        borderRadius: 12,
    },
    btnText: {
        color: COLORS.white,
        // fontFamily: 'Inter',
        fontSize: 13,
        // fontWeight: 600,
    },
})
