// import axios from "axios";
//
// const api = axios.create({
//     baseURL: process.env.EXPO_PUBLIC_API_URL,
//     timeout: 10000,
// });
//
// api.interceptors.request.use((config) => {
//     // додаємо ключ автоматично до кожного запиту
//     if (!config.params) {
//         config.params = {};
//     }
//     config.params.appid = process.env.EXPO_PUBLIC_API_KEY;
//     return config;
// });
//
// export default api;
//
//
// export const getWeather = async (city: string = "London", limit: number = 5) => {
//     try {
//         const res = await api.get("/direct", {
//             params: {q: city, limit}, // ключ автоматично додається через інтерсептор
//         });
//
//         if (res.status >= 400) throw new Error("Error fetching weather");
//
//         return res.data;
//     } catch (error) {
//         console.log("Axios Error:", error);
//         return null;
//     }
// };

import axios from "axios";

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
})
api.interceptors.response.use(
    (res) => res,
    (err) => Promise.reject(err)
);

export const getWeather = async (lat: number, lon: number) => {
    try {
        const res = await api.get(`2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.EXPO_PUBLIC_API_KEY}`)
        if (res.status >= 400) { // @ts-ignore
            throw new Error(res.status)
        }
        return res.data
    } catch (error) {
        // @ts-ignore
        console.log("Axios error:", error.message);
        throw error;
    }
};

// export const getWeatherForecast = async (lat: number, lon: number) => {
//     try {
//         const res = await api.get(`3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.EXPO_PUBLIC_API_KEY}`)
//         // const res = await api.get(`2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.EXPO_PUBLIC_API_KEY}`)
//         if (res.status >= 400) { // @ts-ignore
//             throw new Error(res.status)
//         }
//         return res.data
//     } catch (error) {
//         // @ts-ignore
//         console.log("Axios error:", error.message);
//         throw error;
//     }
// };

// export const getWeatherForecast = async (lat: number, lon: number) => {
//     try {
//         const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall`, {
//             params: {
//                 lat,
//                 lon,
//                 exclude: "minutely,hourly,alerts",
//                 units: "metric",
//                 appid: process.env.EXPO_PUBLIC_API_KEY,
//             },
//         });
//         return res.data;
//     } catch (error: any) {
//         console.log("Axios error:", error.message);
//         throw error;
//     }
// };

export const getWeatherForecast = async (lat: number, lon: number) => {
    try {
        const res = await api.get(`2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.EXPO_PUBLIC_API_KEY}`)
        if (res.status >= 400) { // @ts-ignore
            throw new Error(res.status)
        }
        return res.data
    } catch (error) {
        // @ts-ignore
        console.log("Axios error:", error.message);
        throw error;
    }
};

