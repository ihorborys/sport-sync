import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/src/types/RootStackParamList";
import {stackHeaderStyles} from "./styles";
import {SCREENS} from "@/src/constants/screens";
import AuthScreen from "@/src/screens/AuthScreen/AuthScreen";
import RolesScreen from "@/src/screens/RolesScreen/RolesScreen";
import CoachTabs from "@/src/navigation/CoachTabs/CoachTabs";
import IntroScreen from "@/src/screens/IntroScreen/IntroScreen";
import PlayerTabs from "@/src/navigation/PlayerTabs/PlayerTabs";
import {TouchableOpacity, Text} from 'react-native';
import {COLORS} from "@/src/constants/colors";
import {APP_ICONS} from "@/src/constants/APPIcons";


const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackHeaderStyles}>
            <Stack.Screen name={SCREENS.INTRO} component={IntroScreen} options={{title: ""}}/>
            <Stack.Screen
                name={SCREENS.AUTH}
                component={AuthScreen}
                options={({navigation}) => ({
                    title: "Authorisation",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}>
                            {APP_ICONS.Back(COLORS.white, 22)}
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name={SCREENS.ROLES}
                component={RolesScreen}
                options={({navigation}) => ({
                    title: "Roles",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}>
                            {APP_ICONS.Back(COLORS.white, 22)}
                        </TouchableOpacity>
                    ),
                    // headerRight: () => (
                    //     <TouchableOpacity onPress={() => navigation.navigate(SCREENS.AUTH)} style={{marginRight: 16}}>
                    //         <Text style={{color: COLORS.white}}>Auth</Text>
                    //     </TouchableOpacity>
                    // ),
                })}
            />
            <Stack.Screen
                name={SCREENS.COACH_TABS}
                component={CoachTabs}
                options={({navigation}) => ({
                    title: "Сoach",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}>
                            {APP_ICONS.Roles(COLORS.white, 22)}
                            <Text style={{color: COLORS.white, fontSize: 10}}>Roles</Text>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.AUTH)} style={{marginRight: 16}}>
                            {APP_ICONS.Auth(COLORS.white, 22)}
                            <Text style={{color: COLORS.white, fontSize: 10}}>Auth</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name={SCREENS.PLAYER_TABS}
                component={PlayerTabs}
                options={({navigation}) => ({
                    title: "Player",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}>
                            {APP_ICONS.Roles(COLORS.white, 22)}
                            <Text style={{color: COLORS.white, fontSize: 10}}>Roles</Text>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.AUTH)} style={{marginRight: 16}}>
                            {APP_ICONS.Auth(COLORS.white, 22)}
                            <Text style={{color: COLORS.white, fontSize: 10}}>Auth</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

export default RootNavigator;
