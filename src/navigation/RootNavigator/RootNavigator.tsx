import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "@/src/screens/HomeScreen";
import DetailsScreen from "@/src/screens/DetailsScreen";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeScreen}/>
            <RootStack.Screen name="Details" component={DetailsScreen}/>
        </RootStack.Navigator>
    );
}

export default RootNavigator;
