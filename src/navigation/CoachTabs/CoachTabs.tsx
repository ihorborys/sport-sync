import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SCREENS} from "@/src/constants/screens";
import ProfileScreen from "@/src/screens/ProfileScreen/ProfileScreen";
import {TAB_ICONS} from "@/src/constants/tabBarIcons";
import {TabParamList} from "@/src/types/TabParamList";
import CoachScreen from "@/src/screens/CoachScreen/CoachScreen";
import {bottomTabStyles} from "@/src/navigation/CoachTabs/styles";
import RolesScreen from "@/src/screens/RolesScreen/RolesScreen";
import AuthScreen from "@/src/screens/AuthScreen/AuthScreen";

const Tab = createBottomTabNavigator<TabParamList>();

const CoachTabs = () => {
    return (
        <Tab.Navigator screenOptions={bottomTabStyles}>
            <Tab.Screen name={SCREENS.COACH} component={CoachScreen} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => TAB_ICONS.Home(color, size)
            }}/>
            <Tab.Screen name={SCREENS.ROLES} component={RolesScreen} options={{
                tabBarIcon: ({color, size}) => TAB_ICONS.Roles(color, size)
            }}/>
            <Tab.Screen name={SCREENS.AUTH} component={AuthScreen} options={{
                tabBarLabel: "Auth",
                tabBarIcon: ({color, size}) => TAB_ICONS.Auth(color, size)
            }}/>
            <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({color, size}) => TAB_ICONS.Profile(color, size)
            }}/>
        </Tab.Navigator>
    );
}

export default CoachTabs;
