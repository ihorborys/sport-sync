import {StyleSheet} from "react-native";
import {COLORS} from "@/src/constants/colors";

export const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 96,
        alignItems: "center",
        backgroundColor: COLORS.background,

    },
    inputSection: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {},
    input: {},
    forgot: {},
    socialsSection: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 16,
    },
    registerText: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    }
});