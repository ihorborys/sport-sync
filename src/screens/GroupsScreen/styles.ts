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
    logoContainer: {
        marginBottom: 50,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        marginTop: 40,
        borderRadius: 8
    }
});