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
        // fontFamily: "Inter",
        color: COLORS.white,
        fontSize: 13,
    },
})
