import * as Location from "expo-location";

export const getUserLocation = async () => {
  try {
    // Запит дозволу на геолокацію
    const { status } = await Location.requestForegroundPermissionsAsync();
    console.log("Permission status:", status);
    if (status !== "granted") {
      throw new Error("Доступ до геолокації відмовлено");
    }

    // Отримуємо поточні координати
    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    return { latitude, longitude };
  } catch (error) {
    // @ts-ignore
    console.log("Помилка геолокації:", error.message);
    throw error;
  }
};
