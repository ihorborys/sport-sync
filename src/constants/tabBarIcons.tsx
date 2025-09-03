import React from "react";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";

export type IconRenderer = (color: string, size: number) => React.ReactElement;

export const TAB_ICONS: Record<"Home" | "Roles" | "Auth" | "Profile", IconRenderer> = {
    Home: (color, size) => <Ionicons name="home" color={color} size={size}/>,
    Roles: (color, size) => <MaterialIcons name="group" color={color} size={size}/>,
    Auth: (color, size) => <MaterialIcons name="login" color={color} size={size}/>,
    Profile: (color, size) => <Ionicons name="person" color={color} size={size}/>,
};