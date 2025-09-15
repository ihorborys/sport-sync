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

// Мапа коду погоди на MaterialIcons
export const weatherIconMap: Record<string, string> = {
    "01d": "wb-sunny",     // ясне небо вдень
    "01n": "night",  // ясне небо вночі
    "02d": "cloud",  // мало хмар вдень
    "02n": "cloud",  // мало хмар вночі
    "03d": "cloud",        // хмарно
    "03n": "cloud",
    "04d": "cloud", // дуже хмарно
    "04n": "cloud",
    "09d": "grain",         // дощ
    "09n": "grain",
    "10d": "grain",      // сильний дощ
    "10n": "grain",
    "11d": "grain",      // гроза
    "11n": "grain",
    "13d": "ac-unit",       // сніг
    "13n": "ac-unit",
    "50d": "blur_on",       // туман
    "50n": "blur_on",
};