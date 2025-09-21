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
    subTitle: {},
    buttonsContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    btnStyle: {
        width: "35%",
        backgroundColor: COLORS.white,
        borderWidth: 1.5,
        borderColor: COLORS.primary,
    },
    btnTextStyle: {
        color: COLORS.primary,
        fontSize: 17,
        fontWeight: 600,
        textAlign: "center",
        textTransform: "uppercase",
    }
});