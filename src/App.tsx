import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator/RootNavigator";
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {ActivityIndicator} from "react-native";
import {COLORS} from "./constants/colors";
import {GestureHandlerRootView} from "react-native-gesture-handler";


export default function App() {

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Provider store={store}>
                <PersistGate loading={<ActivityIndicator size="large" color={COLORS.grey}/>} persistor={persistor}>
                    <NavigationContainer>
                        <RootNavigator/>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </GestureHandlerRootView>
    );
}