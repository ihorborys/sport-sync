// import React, {useEffect, useRef, useState} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {CameraView, useCameraPermissions} from 'expo-camera';
// import * as Location from 'expo-location';
// import {Accelerometer} from 'expo-sensors';
//
// const SensorCameraScreen = () => {
//     const cameraRef = useRef(null);
//
//     const [hasLocationPermission, setHasLocationPermission] = useState(false);
//     const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);
//     const [accel, setAccel] = useState({x: 0, y: 0, z: 0});
//
//     // камера: тепер через хук
//     const [cameraPermission, requestPermission] = useCameraPermissions();
//
//     useEffect(() => {
//         const requestPermissions = async () => {
//             if (!cameraPermission) {
//                 await requestPermission();
//             }
//
//             const {status: locStatus} = await Location.requestForegroundPermissionsAsync();
//             setHasLocationPermission(locStatus === 'granted');
//
//             if (locStatus === 'granted') {
//                 try {
//                     const location = await Location.getCurrentPositionAsync({
//                         accuracy: Location.Accuracy.High,
//                     });
//                     setCoords(location.coords);
//                 } catch (error) {
//                     console.warn('Location error:', error);
//                 }
//             }
//         };
//
//         requestPermissions();
//     }, []);
//
//     useEffect(() => {
//         const subscription = Accelerometer.addListener(setAccel);
//         Accelerometer.setUpdateInterval(500);
//         return () => subscription.remove();
//     }, []);
//
//     if (!cameraPermission?.granted || !hasLocationPermission) {
//         return (
//             <View style={styles.centered}>
//             <Text style={styles.text}>Очікуємо дозволи на камеру та геолокацію...</Text>
//         </View>
//     );
//     }
//
//     return (
//         <View style={styles.container}>
//         <CameraView ref={cameraRef} style={styles.camera} facing="back"/>
//     <View style={styles.overlay}>
//     <Text style={styles.text}>Lat: {coords?.latitude?.toFixed(5) ?? '---'}</Text>
//     <Text style={styles.text}>Lon: {coords?.longitude?.toFixed(5) ?? '---'}</Text>
//     <Text style={styles.text}>
//         Accel: X:{accel.x.toFixed(2)} Y:{accel.y.toFixed(2)} Z:{accel.z.toFixed(2)}
//     </Text>
//     </View>
//     </View>
// );
// };
//
// const styles = StyleSheet.create({
//     container: {flex: 1},
//     camera: {...StyleSheet.absoluteFillObject},
//     overlay: {
//         position: 'absolute',
//         bottom: 20,
//         left: 20,
//         backgroundColor: 'rgba(0,0,0,0.5)',
//         padding: 10,
//         borderRadius: 8,
//     },
//     text: {
//         color: 'white',
//         fontSize: 16,
//         marginBottom: 5,
//     },
//     centered: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#000',
//     },
// });
//
// export default SensorCameraScreen;
