// import React, {useEffect, useState} from "react";
// import {SafeAreaView, View, Text, StyleSheet} from "react-native";
// import Logo from "@components/ui/Logo/Logo";
// import BaseText from "@components/ui/BaseText/BaseText";
// import {getWeather} from "@/src/api/api";
// import {styles} from "./styles";
//
// // Тип для даних геокодування
// type GeocodeData = {
//     name: string;
//     lat: number;
//     lon: number;
//     country: string;
//     state?: string;
// };
//
// const CoachScreen = () => {
//     // ✅ State для збереження даних
//     const [locationData, setLocationData] = useState<GeocodeData[] | null>(null);
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         async function prepare() {
//             try {
//                 const res = await getWeather("London"); // або передавай будь-яке місто
//                 setLocationData(res); // зберігаємо дані у state
//             } catch (err) {
//                 console.error("Error fetching location data:", err);
//             } finally {
//                 setLoading(false); // знімаємо loading після запиту
//             }
//         }
//
//         prepare();
//     }, []);
//
//     return (
//         <SafeAreaView style={styles.safeAreaView}>
//             <View style={styles.container}>
//                 <Logo width={"100"} height={"118"}/>
//                 <BaseText>CoachScreen</BaseText>
//
//                 {loading ? (
//                     <Text>Loading...</Text>
//                 ) : locationData && locationData.length > 0 ? (
//                     <View>
//                         {locationData.map((loc, index) => (
//                             <Text key={index}>
//                                 {loc.name}, {loc.country} — lat: {loc.lat}, lon: {loc.lon}
//                             </Text>
//                         ))}
//                     </View>
//                 ) : (
//                     <Text>No data found</Text>
//                 )}
//             </View>
//         </SafeAreaView>
//     );
// };
//
// export default CoachScreen;
//
// // Якщо хочеш, можу додати ще стиль для тексту та контейнера, щоб виглядало гарніше

// import React, {useState} from "react";
// import {SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet, ScrollView} from "react-native";
// import {getWeather} from "@/src/api/api"; // Geocoding API
// import {getWeatherByCoords, WeatherData} from "@/src/api/weather";
//
// export default function WeatherScreen() {
//     const [city, setCity] = useState("London");
//     const [weather, setWeather] = useState<WeatherData | null>(null);
//     const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
//     const [loading, setLoading] = useState(false);
//
//     const fetchWeather = async () => {
//         setLoading(true);
//         try {
//             const geoData = await getWeather(city); // координати міста
//             if (geoData && geoData.length > 0) {
//                 const {lat, lon} = geoData[0];
//                 setCoords({lat, lon});
//
//                 const weatherData = await getWeatherByCoords(lat, lon);
//                 setWeather(weatherData || null);
//             } else {
//                 setCoords(null);
//                 setWeather(null);
//             }
//         } catch (err) {
//             console.error("Error fetching weather:", err);
//             setCoords(null);
//             setWeather(null);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     return (
//         <SafeAreaView style={styles.container}>
//             <ScrollView contentContainerStyle={styles.scroll}>
//                 <Text style={styles.title}>Weather App</Text>
//
//                 <TextInput
//                     style={styles.input}
//                     value={city}
//                     onChangeText={setCity}
//                     placeholder="Enter city"
//                 />
//                 <Button title="Get Weather" onPress={fetchWeather}/>
//
//                 {loading && <Text style={styles.loading}>Loading...</Text>}
//
//                 {coords && (
//                     <View style={styles.coordsContainer}>
//                         <Text>Coordinates:</Text>
//                         <Text>Lat: {coords.lat}</Text>
//                         <Text>Lon: {coords.lon}</Text>
//                     </View>
//                 )}
//
//                 {weather && (
//                     <View style={styles.weatherContainer}>
//                         <Text style={styles.city}>{weather.name}</Text>
//                         <Text style={styles.temp}>{weather.main.temp}°C</Text>
//                         <Text style={styles.desc}>{weather.weather[0].description}</Text>
//                         <Image
//                             style={styles.icon}
//                             source={{
//                                 uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`,
//                             }}
//                         />
//                     </View>
//                 )}
//
//                 {!loading && !weather && coords === null && (
//                     <Text style={styles.noData}>No data found</Text>
//                 )}
//             </ScrollView>
//         </SafeAreaView>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {flex: 1, backgroundColor: "#fff"},
//     scroll: {padding: 16, alignItems: "center"},
//     title: {fontSize: 24, fontWeight: "bold", marginBottom: 16},
//     input: {borderWidth: 1, borderColor: "#ccc", width: "100%", padding: 8, marginBottom: 8},
//     loading: {marginTop: 8, fontSize: 16},
//     coordsContainer: {marginTop: 16, alignItems: "center"},
//     weatherContainer: {marginTop: 16, alignItems: "center"},
//     city: {fontSize: 28, fontWeight: "bold"},
//     temp: {fontSize: 32, fontWeight: "bold"},
//     desc: {fontSize: 18, fontStyle: "italic"},
//     icon: {width: 150, height: 150, marginTop: 8},
//     noData: {marginTop: 16, fontSize: 16, color: "red"},
// });

import React, {useEffect, useState} from "react";
import {SafeAreaView, View, Text, Image} from "react-native";
import Logo from "@components/ui/Logo/Logo";
import BaseText from "@components/ui/BaseText/BaseText";
import {styles} from "./styles";
import WeatherToday from "@components/features/WeatherToday/WeatherToday";
import WeatherSwiper from "@components/ui/WeatherSwiper/WeatherSwiper";


const CoachScreen = () => {
    // const [data, setData] = useState(undefined);
    //
    // useEffect(() => {
    //     async function prepare() {
    //         try {
    //             const {latitude, longitude} = await getUserLocation();
    //             const data = await getWeather(latitude, longitude);
    //             setData(data)
    //             console.log("Weather data:", data);
    //         } catch (err) {
    //             // @ts-ignore
    //             console.log("Failed to fetch weather:", err.message);
    //         }
    //     }
    //
    //     prepare();
    //     console.log("API KEY:", process.env.EXPO_PUBLIC_API_KEY);
    // }, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                {/*<Logo width={"100"} height={"118"}/>*/}
                {/*<BaseText>CoachScreen</BaseText>*/}
                <WeatherSwiper></WeatherSwiper>
            </View>
        </SafeAreaView>
    );
};


export default CoachScreen;
