import React from "react";
import {SafeAreaView, View} from "react-native";
import {styles} from "./styles";
import WeatherSwiper from "@components/ui/WeatherSwiper/WeatherSwiper";


const CoachScreen = () => {

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <WeatherSwiper></WeatherSwiper>
            </View>
        </SafeAreaView>
    );
};


export default CoachScreen;
