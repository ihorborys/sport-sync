import {COLORS} from "@/src/constants/colors";
import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";

export const bottomTabStyles: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarActiveTintColor: COLORS.white,
    tabBarInactiveTintColor: COLORS.black,
    tabBarStyle: {
        backgroundColor: COLORS.primary,
        // height: "15%",
        borderTopWidth: 0.5,
        borderTopColor: COLORS.primaryDark,
    },
}