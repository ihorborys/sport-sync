import React, {useEffect, useState} from "react";
import {View, Text, ActivityIndicator} from "react-native";
import {getWeather} from "@/src/api/api";
import {styles} from "./styles";
import {getUserLocation} from "@/src/utils/getUserLocation";
import {WeatherData, weatherIconMap} from "@components/features/WeatherToday/types";
import {COLORS} from "@/src/constants/colors";
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialIcons";

const WeatherToday = () => {
    const [data, setData] = useState<WeatherData | null>(null);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const {latitude, longitude} = await getUserLocation();
                const data = await getWeather(latitude, longitude);
                setData(data);
                console.log("Weather data:", data);
            } catch (err: any) {
                console.log("Failed to fetch weather:", err.message);
            }
        }

        fetchWeather().catch((err) => {
            console.log("Failed to fetch weather:", (err as Error).message);
        });
        console.log("API KEY:", process.env.EXPO_PUBLIC_API_KEY);
    }, []);

    return (
        <View style={styles.container}>
            {data ? (
                <>
                    <View style={styles.container}>
                        <Text style={styles.title}>{data.name}</Text>
                        <Text style={styles.temperature}>
                            {Math.round(data.main.temp)}°C
                        </Text>
                        <Text style={styles.description}>
                            {data.weather[0].description}
                        </Text>
                        <Icon
                            name={weatherIconMap[data.weather[0].icon]}
                            size={30}
                            color={COLORS.primaryDark}
                        />
                    </View>
                </>
            ) : (
                <ActivityIndicator size="large" color={COLORS.grey}/>
            )}
        </View>
    );
};

export default WeatherToday;
