import React, {useState} from "react";
import {View, FlatList, Alert} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import PrimaryButton from "@/src/components/ui/PrimaryButton/PrimaryButton";
import Input from "@components/ui/Input/Input";
import {styles} from "./styles";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import PlayerCard from "@components/ui/PlayerCard/PlayerCard";
import {addPlayer} from "@/src/redux/groupsSlice";

const GroupDetailsScreen = ({route}: any) => {
    const {groupId} = route.params;
    const group = useSelector((state: any) => state.groups.items.find((g: any) => g.id === groupId));
    const [playerName, setPlayerName] = useState("");
    const dispatch = useDispatch();

    const handleAddPlayer = () => {
        if (!playerName.trim()) {
            Alert.alert('You should enter a player name!')
            return;
        }
        dispatch(addPlayer({groupId, playerName}));
        setPlayerName("");
    };

    return (
        <View style={styles.container}>
            <SectionTitle title={group.name}/>

            <Input
                placeholder="Enter player name"
                value={playerName}
                onChangeText={setPlayerName}
                style={styles.input}
            />
            <PrimaryButton title="Add Player" onPress={handleAddPlayer}/>

            <FlatList
                data={group.players} // group.players: Player[]
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <PlayerCard groupId={group.id} player={item}/>}
                style={{marginTop: 16}}
            />
        </View>
    );
};

export default GroupDetailsScreen;

