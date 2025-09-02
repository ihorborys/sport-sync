import React from "react";
import {Pressable, Text} from "react-native";
import {PressableTextProps} from "@components/ui/PressableText/types";
import {styles} from "@components/ui/PressableText/styles";


const PressableText: React.FC<PressableTextProps> = ({
                                                         text,
                                                         onPress,
                                                         textStyle,
                                                         containerStyle,
                                                         accessibilityLabel,
                                                     }) => {
    return (
        <Pressable
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel || text}
            style={({pressed}) => [
                styles.container,
                containerStyle,
                pressed && styles.pressed,
            ]}
        >
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </Pressable>
    );
};


export default PressableText;

