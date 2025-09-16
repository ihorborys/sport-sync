export interface WeatherData {
    name: string;
    main: {
        temp: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
}


export const fortnistoWeatherIconMap: Record<string, string> = {
    // Ясне небо
    "01d": "day-sunny",
    "01n": "night-clear",

    // Мало хмар
    "02d": "cloudy",
    "02n": "cloudy",

    // Хмарно
    "03d": "cloudy",
    "03n": "cloudy",

    // Дуже хмарно
    "04d": "cloudy",
    "04n": "cloudy",

    // Дощ
    "09d": "rain",
    "09n": "rain",

    // Сильний дощ
    "10d": "rain",
    "10n": "rain",

    // Гроза
    "11d": "lightning",
    "11n": "lightning",

    // Сніг
    "13d": "snow",
    "13n": "snow",

    // Туман
    "50d": "fog",
    "50n": "fog",
};