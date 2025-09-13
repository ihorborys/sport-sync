import {Text, View} from "react-native";
import Swiper from "react-native-swiper";
import React from "react";
import WeatherToday from "@components/features/WeatherToday/WeatherToday";
import {styles} from "@components/ui/WeatherSwiper/styles";
import WeatherForecast from "@components/features/WeatherForecast/WeatherForecast";
import {COLORS} from "@/src/constants/colors";

const WeatherSwiper = () => {

    return (
        <View style={{height: 300}}>
            <Swiper
                loop={false}
                showsPagination={true}
                activeDotColor={COLORS.primary}   // колір активної точки
                dotColor={COLORS.grey}           // колір неактивних точок
            >
                <View style={styles.slide}>
                    <WeatherToday></WeatherToday>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.slideTitle}>Next days 📅</Text>
                    <WeatherForecast></WeatherForecast>
                </View>
            </Swiper>
        </View>
    );
};


export default WeatherSwiper;