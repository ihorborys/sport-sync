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
    "01n": "nights_stay",  // ясне небо вночі
    "02d": "cloud_queue",  // мало хмар вдень
    "02n": "cloud_queue",  // мало хмар вночі
    "03d": "cloud",        // хмарно
    "03n": "cloud",
    "04d": "cloud", // дуже хмарно
    "04n": "cloud",
    "09d": "grain",         // дощ
    "09n": "grain",
    "10d": "grain",      // сильний дощ
    "10n": "grain",
    "11d": "flash_on",      // гроза
    "11n": "flash_on",
    "13d": "ac-unit",       // сніг
    "13n": "ac-unit",
    "50d": "blur_on",       // туман
    "50n": "blur_on",
};