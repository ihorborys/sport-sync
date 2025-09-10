import React from "react";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {Platform} from "react-native";

export type IconRenderer = (color: string, size: number) => React.ReactElement;

export const TAB_ICONS: Record<"Home" | "CreateGroup" | "Profile", IconRenderer> = {
    Home: (color, size) => Platform.OS === 'ios' ?
        <Ionicons name="home" color={color} size={size}/> :
        <MaterialIcons name="home" color={color} size={size}/>,
    CreateGroup: (color, size) => Platform.OS === 'ios' ?
        <Ionicons name="create" color={color} size={size}/> :
        <MaterialIcons name="group-add" color={color} size={size}/>,
    Profile: (color, size) => Platform.OS === 'ios' ?
        <Ionicons name="person" color={color} size={size}/> :
        <MaterialIcons name="person" color={color} size={size}/>,
};