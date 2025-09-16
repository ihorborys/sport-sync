import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/src/types/RootStackParamList";
import {stackHeaderStyles} from "./styles";
import {SCREENS} from "@/src/constants/screens";
import AuthScreen from "@/src/screens/AuthScreen/AuthScreen";
import RolesScreen from "@/src/screens/RolesScreen/RolesScreen";
import CoachesTabs from "@/src/navigation/CoachTabs/CoachTabs";
import IntroScreen from "@/src/screens/IntroScreen/IntroScreen";
import AthleteTabs from "@/src/navigation/AthleteTabs/AthleteTabs";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackHeaderStyles}>
            <Stack.Screen name={SCREENS.INTRO} component={IntroScreen} options={{title: ""}}/>
            <Stack.Screen name={SCREENS.AUTH} component={AuthScreen} options={{title: ""}}/>
            <Stack.Screen name={SCREENS.ROLES} component={RolesScreen} options={{title: ""}}/>
            <Stack.Screen name={SCREENS.COACHES_TABS} component={CoachesTabs} options={{title: ""}}/>
            <Stack.Screen name={SCREENS.ATHLETE_TABS} component={AthleteTabs} options={{title: ""}}/>
        </Stack.Navigator>
    );
}

export default RootNavigator;
