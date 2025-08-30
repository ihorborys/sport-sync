import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "@/src/screens/Homescreen/HomeScreen";
import RolesScreen from "@/src/screens/RolesScreen";
import {RootStackParamList} from "@/src/types/RootStackParamList";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeScreen}/>
            <RootStack.Screen name="Roles" component={RolesScreen}/>
        </RootStack.Navigator>
    );
}

export default RootNavigator;
