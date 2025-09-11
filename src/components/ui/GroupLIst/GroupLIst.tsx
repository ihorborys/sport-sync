import React from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";

const GroupsList = () => {
    // @ts-ignore
    const groups = useSelector((state) => state.groups);

    return (
        <View style={styles.container}>
            <SectionTitle title={'Your Groups'}></SectionTitle>
            {groups.length === 0 ? (
                <Text style={styles.emptyText}>Sorry, You have no any groups... 🙃</Text>
            ) : (
                <FlatList
                    data={groups}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View style={styles.groupItem}>
                            <Text style={styles.groupName}>{item.name}</Text>
                            <Text style={styles.playersCount}>
                                Players: {item.players.length}
                            </Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default GroupsList;

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, backgroundColor: "#fff"},
    groupItem: {
        padding: 12,
        marginVertical: 6,
        backgroundColor: "#f2f2f2",
        borderRadius: 8,
    },
    groupName: {fontSize: 18, fontWeight: "bold"},
    playersCount: {fontSize: 14, color: "#666"},
    emptyText: {fontSize: 16, textAlign: "center", marginTop: 20},
});
