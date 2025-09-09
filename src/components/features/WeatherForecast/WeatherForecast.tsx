import React, {useEffect, useState} from "react";
import {View, Text, Image, ActivityIndicator} from "react-native";
import {getWeatherForecast} from "@/src/api/api";
import {getUserLocation} from "@/src/utils/getUserLocation";
import {styles} from "@components/features/WeatherForecast/styles";
import {ForecastResponse} from "@components/features/WeatherForecast/types";
import {groupByDay} from "@/src/utils/groupByDay";


const WeatherForecast = () => {
    const [data, setData] = useState<ForecastResponse | null>(null);

    useEffect(() => {
        async function fetchWeatherForecast() {
            try {
                const {latitude, longitude} = await getUserLocation();
                const response = await getWeatherForecast(latitude, longitude);
                setData(response);
                console.log("Weather forecast data:", response);
            } catch (err: any) {
                console.log("Failed to fetch forecast data:", err.message);
            }
        }

        fetchWeatherForecast().catch((err) => {
            console.log("Failed to fetch weather:", (err as Error).message);
        });

        console.log("API KEY:", process.env.EXPO_PUBLIC_API_KEY);
    }, []);

    return (
        <View style={styles.container}>
            {data ? (
                <View>
                    {groupByDay(data.list).slice(1, 4).map((day) => (
                        <View
                            key={day.date}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginVertical: 6,
                            }}
                        >
                            <Text style={{width: 100}}>{day.date}</Text>
                            <Image
                                style={{width: 50, height: 50}}
                                source={{
                                    uri: `https://openweathermap.org/img/wn/${day.icon}@2x.png`,
                                }}
                            />
                            <Text style={{marginLeft: 10}}>
                                {day.avgTemp}°C, {day.description}
                            </Text>
                        </View>
                    ))}
                </View>
            ) : (
                <ActivityIndicator size="large" color="#1e3a8a"/>
            )}
        </View>
    );
};

export default WeatherForecast;