import {StyleSheet} from "react-native";
import {COLORS} from "@/src/constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 24,
        backgroundColor: COLORS.background,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        padding: 10,
        marginBottom: 12,
        marginTop: 24,
        borderRadius: 8
    },
    groupList: {
        marginTop: 24,
    }
});