import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SCREENS} from "@/src/constants/screens";
import ProfileScreen from "@/src/screens/ProfileScreen/ProfileScreen";
import {APP_ICONS} from "@/src/constants/APPIcons";
import {RootStackParamList} from "@/src/types/RootStackParamList";
import {bottomTabStyles} from "@/src/navigation/CoachTabs/styles";
import GroupScreen from "@/src/screens/GroupsScreen/GroupsScreen";
import PlayerScreen from "@/src/screens/PlayerScreen/PlayerScreen";

const Tab = createBottomTabNavigator<RootStackParamList>();

const PlayerTabs = () => {
    return (
        <Tab.Navigator screenOptions={bottomTabStyles}>
            <Tab.Screen name={SCREENS.PLAYER} component={PlayerScreen} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => APP_ICONS.Home(color, size)
            }}/>
            <Tab.Screen name={SCREENS.GROUPS} component={GroupScreen} options={{
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

export default PlayerTabs;
