import React from "react";
import {View} from "react-native";
import {styles} from "./styles";
import WeatherSwiper from "@components/ui/WeatherSwiper/WeatherSwiper";
import CalendarView from "@components/features/CalendarView/CalendarView";


const CoachScreen = () => {

    return (
        <View style={styles.container}>
            <WeatherSwiper></WeatherSwiper>
            <CalendarView></CalendarView>
        </View>
    );
};


export default CoachScreen;
