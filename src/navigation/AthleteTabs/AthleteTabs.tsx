import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SCREENS} from "@/src/constants/screens";
import ProfileScreen from "@/src/screens/ProfileScreen/ProfileScreen";
import {TAB_ICONS} from "@/src/constants/tabBarIcons";
import {TabParamList} from "@/src/types/TabParamList";
import AthleteScreen from "@/src/screens/AthleteScreen/AthleteScreen";
import {bottomTabStyles} from "@/src/navigation/AthleteTabs/styles";
import AuthScreen from "@/src/screens/AuthScreen/AuthScreen";
import RolesScreen from "@/src/screens/RolesScreen/RolesScreen";

const Tab = createBottomTabNavigator<TabParamList>();

const AthleteTabs = () => {
    return (
        <Tab.Navigator screenOptions={bottomTabStyles}>
            <Tab.Screen name={SCREENS.ATHLETE} component={AthleteScreen} options={{
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

export default AthleteTabs;
