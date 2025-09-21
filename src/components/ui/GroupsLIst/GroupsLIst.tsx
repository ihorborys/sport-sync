import React from "react";
import {View, Text, FlatList} from "react-native";
import {useSelector} from "react-redux";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import {styles} from "./styles";
import GroupCard from "@components/ui/GroupCard/GroupCard";
import {useNavigation} from "@react-navigation/native";
import {SCREENS} from "@/src/constants/screens";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/src/types/RootStackParamList";

type GroupsListNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const GroupsList = () => {

    const navigation = useNavigation<GroupsListNavigationProp>();

    const groups = useSelector((state: any) => state.groups.items);

    return (
        <View style={styles.container}>
            <SectionTitle title={'Groups'}></SectionTitle>
            {groups.length === 0 ? (
                <Text style={styles.emptyText}>Sorry, You have no any groups... 🙃</Text>
            ) : (
                <FlatList
                    data={groups}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) =>
                        <GroupCard
                            group={item}
                            onPress={() => navigation.navigate(SCREENS.GROUP_DETAILS, {groupId: item.id})}
                        />}
                />
            )}
        </View>
    );
};

export default GroupsList;