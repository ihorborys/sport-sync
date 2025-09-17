import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator/RootNavigator";
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {ActivityIndicator} from "react-native";
import {COLORS} from "./constants/colors";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";


export default function App() {

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Provider store={store}>
                <PersistGate loading={<ActivityIndicator size="large" color={COLORS.grey}/>} persistor={persistor}>
                    <SafeAreaProvider>
                        <SafeAreaView style={{flex: 1}} edges={["left", "right",]}>
                            <NavigationContainer>
                                <RootNavigator/>
                            </NavigationContainer>
                        </SafeAreaView>
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        </GestureHandlerRootView>
    );
}