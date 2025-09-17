import {StyleSheet} from "react-native";
import {COLORS} from "@/src/constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 96,
        alignItems: "center",
        backgroundColor: COLORS.background,

    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },
    title: {},
    subTitle: {}
});