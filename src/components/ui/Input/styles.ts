import {StyleSheet} from "react-native";
import {COLORS} from "@/src/constants/colors";

export const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 48,
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: COLORS.greyLight,
        borderRadius: 12,
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: 600,
        color: COLORS.textDark,
        backgroundColor: COLORS.white,
    },
});