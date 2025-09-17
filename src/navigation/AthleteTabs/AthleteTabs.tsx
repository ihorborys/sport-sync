import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SCREENS} from "@/src/constants/screens";
import ProfileScreen from "@/src/screens/ProfileScreen/ProfileScreen";
import {TAB_ICONS} from "@/src/constants/tabBarIcons";
import {TabParamList} from "@/src/types/TabParamList";
import {bottomTabStyles} from "@/src/navigation/CoachTabs/styles";
import GroupScreen from "@/src/screens/GroupsScreen/GroupsScreen";
import AthleteScreen from "@/src/screens/AthleteScreen/AthleteScreen";

const Tab = createBottomTabNavigator<TabParamList>();

const AthleteTabs = () => {
    return (
        <Tab.Navigator screenOptions={bottomTabStyles}>
            <Tab.Screen name={SCREENS.ATHLETE} component={AthleteScreen} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => TAB_ICONS.Home(color, size)
            }}/>
            <Tab.Screen name={SCREENS.GROUPS} component={GroupScreen} options={{
                tabBarLabel: "Groups",
                tabBarIcon: ({color, size}) => TAB_ICONS.Groups(color, size)
            }}/>
            <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({color, size}) => TAB_ICONS.Profile(color, size)
            }}/>
        </Tab.Navigator>
    );
}

export default AthleteTabs;
