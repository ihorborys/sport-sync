// import React, {useRef} from "react";
// import {Text, TouchableOpacity, Animated} from "react-native";
// import {Swipeable} from "react-native-gesture-handler";
// import {useDispatch} from "react-redux";
// import {removePlayer} from "@/src/redux/groupsSlice";
// import {styles} from "./styles";
// // @ts-ignore
// import Icon from "react-native-vector-icons/MaterialIcons";
// import {COLORS} from "@/src/constants/colors";
//
// const PlayerCard = ({groupId, player, index}: { groupId: string, player: string, index: number }) => {
//     const dispatch = useDispatch();
//
//     // refs для анімації
//     const scaleY = useRef(new Animated.Value(1)).current;
//     const opacity = useRef(new Animated.Value(1)).current;
//
//     const handleDelete = () => {
//         Animated.parallel([
//             Animated.timing(opacity, {
//                 toValue: 0,
//                 duration: 300,
//                 useNativeDriver: true,
//             }),
//             Animated.timing(scaleY, {
//                 toValue: 0,
//                 duration: 300,
//                 useNativeDriver: true,
//             }),
//         ]).start(({finished}) => {
//             if (finished) {
//                 dispatch(removePlayer({groupId, playerId: index}));
//             }
//         });
//     };
//
//     // @ts-ignore
//     const renderRightActions = (progress, dragX) => {
//         const scale = dragX.interpolate({
//             inputRange: [-100, 0],
//             outputRange: [1, 0.5],
//             extrapolate: "clamp",
//         });
//
//         return (
//             <TouchableOpacity style={styles.deleteBox} onPress={handleDelete}>
//                 <Animated.View style={{transform: [{scale}]}}>
//                     <Icon name="delete" size={24} color={COLORS.white}/>
//                 </Animated.View>
//             </TouchableOpacity>
//         );
//     };
//
//     return (
//         <Swipeable renderRightActions={renderRightActions}>
//             <Animated.View
//                 style={[
//                     styles.playerContainer,
//                     {transform: [{scaleY}], opacity, overflow: "hidden"},
//                 ]}
//             >
//                 <TouchableOpacity activeOpacity={0.7} style={styles.playerItem}>
//                     <Text style={styles.playerName}>{player}</Text>
//                 </TouchableOpacity>
//             </Animated.View>
//         </Swipeable>
//     );
// };
//
// export default PlayerCard;


// import React, {useRef} from "react";
// import {Text, TouchableOpacity, Animated} from "react-native";
// import {Swipeable} from "react-native-gesture-handler";
// import {useDispatch} from "react-redux";
// import {removePlayer} from "@/src/redux/groupsSlice";
// import {styles} from "./styles";
// // @ts-ignore
// import Icon from "react-native-vector-icons/MaterialIcons";
// import {COLORS} from "@/src/constants/colors";
// import playerScreen from "@/src/screens/PlayerScreen/PlayerScreen";
//
// const PlayerCard = ({groupId, player, index}: { groupId: string, player: string, index: number }) => {
//     const dispatch = useDispatch();
//
//     // refs для анімації та Swipeable
//     const scaleY = useRef(new Animated.Value(1)).current;
//     const opacity = useRef(new Animated.Value(1)).current;
//     const swipeableRef = useRef<Swipeable>(null);
//
//     const handleDelete = () => {
//         // закриваємо свайп, щоб кнопка не залишалась
//         swipeableRef.current?.close();
//
//         Animated.parallel([
//             Animated.timing(opacity, {
//                 toValue: 0,
//                 duration: 300,
//                 useNativeDriver: true,
//             }),
//             Animated.timing(scaleY, {
//                 toValue: 0,
//                 duration: 300,
//                 useNativeDriver: true,
//             }),
//         ]).start(() => {
//             dispatch(removePlayer({groupId, playerId: player.id}));
//         });
//     };
//
//     // @ts-ignore
//     const renderRightActions = (progress, dragX) => {
//         const scale = dragX.interpolate({
//             inputRange: [-100, 0],
//             outputRange: [1, 0.5],
//             extrapolate: "clamp",
//         });
//
//         return (
//             <TouchableOpacity style={styles.deleteBox} onPress={handleDelete}>
//                 <Animated.View style={{transform: [{scale}]}}>
//                     <Icon name="delete" size={24} color={COLORS.white}/>
//                 </Animated.View>
//             </TouchableOpacity>
//         );
//     };
//
//     // @ts-ignore
//     return (
//         <Swipeable ref={swipeableRef} renderRightActions={renderRightActions}>
//             <Animated.View
//                 style={[
//                     styles.playerContainer,
//                     {transform: [{scaleY}], opacity, overflow: "hidden"},
//                 ]}
//             >
//                 <TouchableOpacity activeOpacity={0.7} style={styles.playerItem}>
//                     <Text style={styles.playerName}>{player.name}</Text>
//                 </TouchableOpacity>
//             </Animated.View>
//         </Swipeable>
//     );
// };
//
// export default PlayerCard;


import React, {useRef} from "react";
import {Text, TouchableOpacity, Animated} from "react-native";
import {Swipeable} from "react-native-gesture-handler";
import {useDispatch} from "react-redux";
import {removePlayer} from "@/src/redux/groupsSlice";
import {styles} from "./styles";
// @ts-ignore
import Icon from "react-native-vector-icons/MaterialIcons";
import {COLORS} from "@/src/constants/colors";
import {PlayerCardProps} from "@components/ui/PlayerCard/types";


const PlayerCard: React.FC<PlayerCardProps> = ({groupId, player}) => {
    const dispatch = useDispatch();
    const scaleY = useRef(new Animated.Value(1)).current;
    const opacity = useRef(new Animated.Value(1)).current;
    const swipeableRef = useRef<Swipeable>(null);

    const handleDelete = () => {
        swipeableRef.current?.close();

        Animated.parallel([
            Animated.timing(opacity, {toValue: 0, duration: 300, useNativeDriver: true}),
            Animated.timing(scaleY, {toValue: 0, duration: 300, useNativeDriver: true}),
        ]).start(() => {
            dispatch(removePlayer({groupId, playerId: player.id}));
        });
    };

    const renderRightActions = (progress: any, dragX: any) => {
        const scale = dragX.interpolate({inputRange: [-100, 0], outputRange: [1, 0.5], extrapolate: "clamp"});
        return (
            <TouchableOpacity style={styles.deleteBox} onPress={handleDelete}>
                <Animated.View style={{transform: [{scale}]}}>
                    <Icon name="delete" size={24} color={COLORS.white}/>
                </Animated.View>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable ref={swipeableRef} renderRightActions={renderRightActions}>
            <Animated.View style={[styles.playerContainer, {transform: [{scaleY}], opacity, overflow: "hidden"}]}>
                <TouchableOpacity activeOpacity={0.7} style={styles.playerItem}>
                    <Text style={styles.playerName}>{player.name}</Text>
                </TouchableOpacity>
            </Animated.View>
        </Swipeable>
    );
};

export default PlayerCard;


