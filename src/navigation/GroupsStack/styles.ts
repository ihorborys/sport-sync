import {COLORS} from "@/src/constants/colors";
import {NativeStackNavigationOptions} from "@react-navigation/native-stack";

export const GroupsStackHeaderStyles: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: COLORS.primary,
    },
    headerTintColor: COLORS.white,
    headerTitleStyle: {
        fontWeight: "800",
    },
    headerTitleAlign: "center",
    headerBackVisible: true, // приховати стандартну кнопку

}