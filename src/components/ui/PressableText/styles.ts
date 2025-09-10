import {StyleSheet} from "react-native";
import {COLORS} from "@/src/constants/colors";

export const styles = StyleSheet.create({
    container: {},
    text: {
        fontFamily: "Inter",
        color: COLORS.primary,
        fontSize: 13,
        fontWeight: 600,
    },
    pressed: {
        opacity: 0.6,
    },
});