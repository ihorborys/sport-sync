import {StyleSheet} from "react-native";
import {COLORS} from "@/src/constants/colors";

export const styles = StyleSheet.create({
    container: {
        // alignSelf: "center",
        paddingVertical: 4,
    },
    text: {
        color: COLORS.primary,
        fontSize: 13,
        fontWeight: 600,
        // textAlign: "center",
    },
    pressed: {
        opacity: 0.6,
    },
});