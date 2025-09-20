import {StyleSheet} from "react-native";

import {COLORS} from "@/src/constants/colors";

export const styles = StyleSheet.create({
    playerContainer: {
        width: 200,
        height: 100,

        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,

        marginHorizontal: 6,
        marginTop: 20,
        backgroundColor: COLORS.white,

        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: COLORS.primary,
    },
    playerItem: {flex: 1, alignItems: "center", justifyContent: "center"},
    playerName: {fontSize: 21, fontWeight: "800", color: COLORS.primary},
    playersCount: {fontSize: 14, color: COLORS.greyDark},
    emptyText: {fontSize: 16, textAlign: "center", marginTop: 20},

    deleteBox: {
        backgroundColor: COLORS.red,
        justifyContent: "center",
        alignItems: "flex-end",
        borderRadius: 10,
        marginVertical: 8,
        paddingHorizontal: 20,
    },
    deleteText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
