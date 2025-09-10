import axios from "axios";
import {IWeather, IWeatherForecast} from "@/src/api/types";

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
})
api.interceptors.response.use(
    (res) => res,
    (err) => Promise.reject(err)
);

export const getWeather = async (lat: number, lon: number): Promise<IWeather> => {
    try {
        const res = await api.get<IWeather>(`2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.EXPO_PUBLIC_API_KEY}`)
        if (res.status >= 400) {
            throw new Error(String(res.status))
        }
        return res.data
    } catch (error: any) {
        console.log("Axios error:", error.message);
        throw error;
    }
};

export const getWeatherForecast = async (lat: number, lon: number): Promise<IWeatherForecast> => {
    try {
        const res = await api.get<IWeatherForecast>(`2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.EXPO_PUBLIC_API_KEY}`)
        if (res.status >= 400) {
            throw new Error(String(res.status))
        }
        return res.data
    } catch (error: any) {
        console.log("Axios error:", error.message);
        throw error;
    }
};

