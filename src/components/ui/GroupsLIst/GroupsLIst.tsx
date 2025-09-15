import React from "react";
import {View, Text, FlatList} from "react-native";
import {useSelector} from "react-redux";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import {styles} from "./styles";
import GroupCard from "@components/ui/GroupCard/GroupCard";

const GroupsList = () => {
    // @ts-ignore
    const groups = useSelector(state => state.groups.items);

    return (
        <View style={styles.container}>
            <SectionTitle title={'Your Groups'}></SectionTitle>
            {groups.length === 0 ? (
                <Text style={styles.emptyText}>Sorry, You have no any groups... 🙃</Text>
            ) : (
                <FlatList
                    data={groups}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <GroupCard group={item}/>}
                />
            )}
        </View>
    );
};

export default GroupsList;