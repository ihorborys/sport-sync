import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/src/types/RootStackParamList";
import {stackHeaderStyles} from "./styles";
import {SCREENS} from "@/src/constants/screens";
import AuthScreen from "@/src/screens/AuthScreen/AuthScreen";
import RolesScreen from "@/src/screens/RolesScreen/RolesScreen";
import CoachesTabs from "@/src/navigation/CoachTabs/CoachTabs";
import IntroScreen from "@/src/screens/IntroScreen/IntroScreen";
import AthleteTabs from "@/src/navigation/AthleteTabs/AthleteTabs";
import {TouchableOpacity, Text} from 'react-native';


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
                            <Text style={{color: 'white'}}>Back</Text>
                        </TouchableOpacity>
                    )
                })}
            />
            <Stack.Screen
                name={SCREENS.ROLES}
                component={RolesScreen}
                options={({navigation}) => ({
                    title: "Roles",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}>
                            <Text style={{color: 'white'}}>Back</Text>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.AUTH)} style={{marginRight: 16}}>
                            <Text style={{color: 'white'}}>Auth</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name={SCREENS.COACHES_TABS}
                component={CoachesTabs}
                options={({navigation}) => ({
                    title: "Сoach",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}>
                            <Text style={{color: 'white'}}>Back</Text>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.AUTH)} style={{marginRight: 16}}>
                            <Text style={{color: 'white'}}>Auth</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name={SCREENS.ATHLETE_TABS}
                component={AthleteTabs}
                options={({navigation}) => ({
                    title: "Athlete",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 16}}>
                            <Text style={{color: 'white'}}>Back</Text>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate(SCREENS.AUTH)} style={{marginRight: 16}}>
                            <Text style={{color: 'white'}}>Auth</Text>
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

export default RootNavigator;
