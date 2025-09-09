export interface ForecastResponse {
    list: {
        dt: number;
        main: { temp: number };
        weather: { icon: string; description: string }[];
    }[];
}