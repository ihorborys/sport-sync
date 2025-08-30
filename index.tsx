import {registerRootComponent} from "expo";
import App from "./src/App";

registerRootComponent(App);


// import {Alert, Animated, StyleSheet, Text, View} from "react-native";
//
// import GroupButton from "@components/ui/GroupButton/GroupButton";
// import Input from "@components/ui/Input/Input";
// import Logo from "@components/ui/Logo/Logo";
// import PrimaryButton from "@components/ui/PrimaryButton/PrimaryButton";
// import SectionSubtitle from "@components/ui/SectionSubtitle/SectionSubtitle";
// import ScrollView = Animated.ScrollView;
// import fallback from "napi-postinstall/fallback";
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import HomeScreen from "@/src/screens/HomeScreen";
//
// export default function Index() {
//     return (
//         <View style={styles.container}>
//             <ScrollView style={styles.scrollViewContainer}
//                         showsVerticalScrollIndicator={false}>
//                 <Logo width={"200"} height={"236"}></Logo>
//                 <Logo width={"200"} height={"236"}></Logo>
//                 <Logo width={"200"} height={"236"}></Logo>
//                 <Logo width={"200"} height={"236"}></Logo>
//                 <Logo width={"200"} height={"236"}></Logo>
//             </ScrollView>
//
//             <ScrollView style={styles.scrollViewContainer} horizontal
//                         showsHorizontalScrollIndicator={false}>
//                 <Logo width={"100"} height={"118"}></Logo>
//                 <Logo width={"100"} height={"118"}></Logo>
//                 <Logo width={"100"} height={"118"}></Logo>
//                 <Logo width={"100"} height={"118"}></Logo>
//                 <Logo width={"100"} height={"118"}></Logo>
//             </ScrollView>
//
//             <SectionSubtitle title={"Your Groups"}></SectionSubtitle>
//             <GroupButton title={"Group 2015 A"} onPress={() => Alert.alert(`You selected Group 2015 A`)}></GroupButton>
//             <Input></Input>
//             <PrimaryButton title={"Next"} onPress={() => console.log('Pressed')}></PrimaryButton>
//         </View>
//     );
// }
//
// // const Tab = createBottomTabNavigator();
// //
// // export const AppTabs = () => {
// //     return (
// //         <Tab.Navigator>
// //             <Tab.Screen name="Home" component={HomeScreen}/>
// //             {/*<Tab.Screen name="Search" component={SearchScreen}/>*/}
// //             {/*<Tab.Screen name="Notifications" component={NotificationsScreen}/>*/}
// //             {/*<Tab.Screen name="Profile" component={ProfileScreen}/>*/}
// //         </Tab.Navigator>
// //     );
// // };
//
// // export default AppTabs;
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         paddingHorizontal: 24,
//         marginTop: 50,
//     },
//     scrollViewContainer: {}
// });
