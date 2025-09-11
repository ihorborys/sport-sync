import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator/RootNavigator";
import {Provider} from "react-redux";
import {store} from "@/src/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootNavigator/>
            </NavigationContainer>
        </Provider>
    );
}