import React, {useRef} from "react";
import {Text, TouchableOpacity, Animated} from "react-native";
import {Swipeable} from "react-native-gesture-handler";
import {useDispatch} from "react-redux";
import {removeGroup} from "@/src/redux/groupsSlice";
import {styles} from "./styles";
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from "@/src/constants/colors";

const GroupCard = ({group, onPress}: { group: any, onPress?: () => void }) => {
    const dispatch = useDispatch();

    // refs для анімації
    const scaleY = useRef(new Animated.Value(1)).current;
    const opacity = useRef(new Animated.Value(1)).current;

    const handleDelete = () => {
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(scaleY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => {
            dispatch(removeGroup(group.id));
        });
    };

    const renderRightActions = (progress: any, dragX: any) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0.5],
            extrapolate: "clamp",
        });

        return (
            <TouchableOpacity style={styles.deleteBox} onPress={handleDelete}>
                <Animated.View style={{transform: [{scale}]}}>
                    <Icon name="delete" size={24} color={COLORS.white}/>
                </Animated.View>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <Animated.View
                style={[
                    styles.groupContainer,
                    {transform: [{scaleY}], opacity, overflow: "hidden"},
                ]}
            >
                <TouchableOpacity activeOpacity={0.7} onPress={onPress}
                                  style={styles.groupItem}>
                    <Text style={styles.groupName}>{group.name}</Text>
                    <Text style={styles.playersCount}>Players: {group.players.length}</Text>
                </TouchableOpacity>
            </Animated.View>
        </Swipeable>
    );
};

export default GroupCard;

