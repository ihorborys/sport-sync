import React from "react";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {Platform} from "react-native";

export type IconRenderer = (color: string, size: number) => React.ReactElement;

export const APP_ICONS: Record<"Home" | "Groups" | "Profile" | "Back" | "Roles" | "Auth", IconRenderer> = {
    Home: (color, size) => Platform.OS === 'ios' ?
        <Ionicons name="home" color={color} size={size}/> :
        <MaterialIcons name="home" color={color} size={size}/>,
    Groups: (color, size) => Platform.OS === 'ios' ?
        <Ionicons name="create" color={color} size={size}/> :
        <MaterialIcons name="group-add" color={color} size={size}/>,
    Profile: (color, size) => Platform.OS === 'ios' ?
        <Ionicons name="person" color={color} size={size}/> :
        <MaterialIcons name="person" color={color} size={size}/>,
    Back: (color, size) => Platform.OS === 'ios' ?
        <Ionicons name="arrow-back-outline" color={color} size={size}/> :
        <MaterialIcons name="arrow-back" color={color} size={size}/>,
    Roles: (color, size) => Platform.OS === 'ios' ?
        <Ionicons name="people-outline" color={color} size={size}/> :
        <MaterialIcons name="group" color={color} size={size}/>,
    Auth: (color, size) => Platform.OS === 'ios' ?
        <Ionicons name="log-out-outline" color={color} size={size}/> :
        <MaterialIcons name="logout" color={color} size={size}/>,
};