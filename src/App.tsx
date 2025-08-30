import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator/RootNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    );
}