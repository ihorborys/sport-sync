import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SCREENS} from "@/src/constants/screens";
import HomeScreen from "@/src/screens/HomeScreen/HomeScreen";
import AuthScreen from "@/src/screens/AuthScreen/AuthScreen";
import RolesScreen from "@/src/screens/RolesScreen/RolesScreen";
import ProfileScreen from "@/src/screens/ProfileScreen/ProfileScreen";
import {bottomTabStyles} from "@/src/navigation/RolesTabs/styles";
import {RolesTabParamList} from "@/src/navigation/RolesTabs/types";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator<RolesTabParamList>();

const RolesTabs = () => {
    return (
        <Tab.Navigator screenOptions={bottomTabStyles}>
            <Tab.Screen name={SCREENS.ROLES} component={RolesScreen} options={{
                tabBarLabel: "Roles", tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="group" color={color} size={size}/>
                ),
            }}/>
            <Tab.Screen name={SCREENS.HOME} component={HomeScreen} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" color={color} size={size}/>
                ),
            }}/>
            <Tab.Screen name={SCREENS.AUTH} component={AuthScreen} options={{
                tabBarLabel: "Auth",
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="login" color={color} size={size}/>
                ),
            }}/>
            <Tab.Screen name={SCREENS.PROFILE} component={ProfileScreen} options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="person" color={color} size={size}/>
                ),
            }}/>
        </Tab.Navigator>
    );
}

export default RolesTabs;
