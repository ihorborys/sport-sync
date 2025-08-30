import {StyleSheet} from "react-native";
import {COLORS} from "@/src/constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 48,
        backgroundColor: COLORS.background,
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 24,
        gap: 12,
    },
    title: {},
    subTitle: {
        marginBottom: 48,
    }
});