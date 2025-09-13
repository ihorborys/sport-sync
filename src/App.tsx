import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator/RootNavigator";
import {Provider} from "react-redux";
import {persistor, store} from "@/src/redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {ActivityIndicator} from "react-native";
import {COLORS} from "@/src/constants/colors";


export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator size="large" color={COLORS.grey}/>} persistor={persistor}>
                <NavigationContainer>
                    <RootNavigator/>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}