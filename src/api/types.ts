// Для поточної погоди
export interface IWeather {
    coord: { lon: number; lat: number };
    weather: { id: number; main: string; description: string; icon: string }[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: { speed: number; deg: number };
    name: string;
}

// Для прогнозу
export interface IWeatherForecast {
    cod: string;
    message: number;
    cnt: number;
    list: {
        dt: number;
        main: { temp: number; feels_like: number; temp_min: number; temp_max: number };
        weather: { id: number; main: string; description: string; icon: string }[];
        wind: { speed: number; deg: number };
        dt_txt: string;
    }[];
    city: { id: number; name: string; country: string };
}