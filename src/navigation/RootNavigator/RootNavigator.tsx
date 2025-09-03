import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "@/src/screens/HomeScreen/HomeScreen";
import RolesScreen from "@/src/screens/RolesScreen/RolesScreen";
import {RootStackParamList} from "@/src/types/RootStackParamList";
import {stackHeaderStyles} from "@/src/navigation/RootNavigator/styles";
import {SCREENS} from "@/src/constants/screens";
import AuthScreen from "@/src/screens/AuthScreen/AuthScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackHeaderStyles}>
            <Stack.Screen name={SCREENS.HOME} component={HomeScreen} options={{title: ""}}/>
            <Stack.Screen name={SCREENS.AUTH} component={AuthScreen} options={{title: ""}}/>
            <Stack.Screen name={SCREENS.ROLES} component={RolesScreen} options={{title: ""}}/>
        </Stack.Navigator>
    );
}

export default RootNavigator;
