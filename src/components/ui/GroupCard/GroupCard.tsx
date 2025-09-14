import React from "react";
import {View, Text, TouchableOpacity, Animated} from "react-native";
import {Swipeable} from "react-native-gesture-handler";
import {useDispatch} from "react-redux";
import {removeGroup} from "@/src/redux/groupsSlice";
import {styles} from "./styles";
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from "@/src/constants/colors";

// @ts-ignore
const GroupCard = ({group}) => {
    const dispatch = useDispatch();

    // @ts-ignore
    const renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0.5],
            extrapolate: "clamp",
        });

        return (
            <TouchableOpacity
                style={styles.deleteBox}
                onPress={() => dispatch(removeGroup(group.id))}
            >
                <Animated.View style={[{transform: [{scale}]}]}>
                    <Icon name="delete" size={24} color={COLORS.white}/>
                </Animated.View>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={styles.groupItem}>
                <Text style={styles.groupName}>{group.name}</Text>
                <Text style={styles.playersCount}>
                    Players: {group.players.length}
                </Text>
            </View>
        </Swipeable>
    );
};

export default GroupCard;
