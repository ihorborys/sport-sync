import React, {useState} from "react";
import {View, Text, TextInput, Button, FlatList} from "react-native";
import {useSelector, useDispatch} from "react-redux";

// @ts-ignore
const GroupDetailsScreen = ({route}) => {
    const {groupId} = route.params;
    // @ts-ignore
    const group = useSelector(state => state.groups.items.find(g => g.id === groupId));

    const [playerName, setPlayerName] = useState("");
    const dispatch = useDispatch();

    const addPlayer = () => {
        if (!playerName) return;
        dispatch({type: "groups/addPlayer", payload: {groupId, playerName}});
        setPlayerName("");
    };

    return (
        <View style={{flex: 1, padding: 16}}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>{group.name}</Text>

            <TextInput
                placeholder="Enter player name"
                value={playerName}
                onChangeText={setPlayerName}
                style={{borderWidth: 1, borderColor: "#ccc", padding: 8, marginVertical: 10}}
            />
            <Button title="Add Player" onPress={addPlayer}/>

            <FlatList
                data={group.players}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Text>- {item}</Text>}
                style={{marginTop: 16}}
            />
        </View>
    );
};

export default GroupDetailsScreen;
