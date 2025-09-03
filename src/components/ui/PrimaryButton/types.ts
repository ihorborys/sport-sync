import {StyleProp, TextStyle, ViewStyle} from "react-native";

export interface IPrimaryButtonProps {
    title: string;
    onPress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}