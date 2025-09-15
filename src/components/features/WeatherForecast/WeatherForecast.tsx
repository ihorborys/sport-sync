import React, {useEffect, useState} from "react";
import {View, Text, ActivityIndicator} from "react-native";
import {getWeatherForecast} from "@/src/api/api";
import {getUserLocation} from "@/src/utils/getUserLocation";
import {styles} from "@components/features/WeatherForecast/styles";
import {ForecastResponse} from "@components/features/WeatherForecast/types";
import {groupByDay} from "@/src/utils/groupByDay";
import {COLORS} from "@/src/constants/colors";
import {fortnistoWeatherIconMap} from "@components/features/WeatherToday/types";
import {Fontisto} from "@expo/vector-icons";


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

    // @ts-ignore
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
                            <Fontisto
                                name={fortnistoWeatherIconMap[day.icon] as keyof typeof Fontisto.glyphMap}
                                size={20}
                                color={COLORS.primary}
                            />
                            <Text style={{marginLeft: 10}}>
                                {day.avgTemp}°C
                            </Text>
                        </View>
                    ))}
                </View>
            ) : (
                <ActivityIndicator size="large" color={COLORS.grey}/>
            )}
        </View>
    );
};

export default WeatherForecast;