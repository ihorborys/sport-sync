import {GestureResponderEvent, StyleProp, TextStyle, ViewStyle} from "react-native";

export interface PressableTextProps {
    text: string;
    onPress: (event: GestureResponderEvent) => void;
    textStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    accessibilityLabel?: string;
}