import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SCREENS} from "@/src/constants/screens";
import ProfileScreen from "@/src/screens/ProfileScreen/ProfileScreen";
import {APP_ICONS} from "@/src/constants/APPIcons";
import {RootStackParamList} from "@/src/types/RootStackParamList";
import CoachScreen from "@/src/screens/CoachScreen/CoachScreen";
import {bottomTabStyles} from "./styles";
import GroupsStack from "@/src/navigation/GroupsStack/GroupsStack";

const Tab = createBottomTabNavigator<RootStackParamList>();

const CoachTabs = () => {
    return (
        <Tab.Navigator screenOptions={bottomTabStyles}>
            <Tab.Screen name={SCREENS.COACH} component={CoachScreen} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => APP_ICONS.Home(color, size)
            }}/>
            <Tab.Screen name={SCREENS.GROUPS_STACK} component={GroupsStack} options={{
                tabBarLabel: "Groups",
                tabBarIcon: ({color, size}) => APP_ICONS.Groups(color, size)
            }}/>
            <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({color, size}) => APP_ICONS.Profile(color, size)
            }}/>
        </Tab.Navigator>
    );
}

export default CoachTabs;