import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {addGroup} from '@/src/redux/groupsSlice';
import Logo from "@components/ui/Logo/Logo";
import {styles} from "./styles"
import Input from "@components/ui/Input/Input";
import PrimaryButton from "@components/ui/PrimaryButton/PrimaryButton";
import GroupsList from "@components/ui/GroupsLIst/GroupsLIst";

// @ts-ignore
const CreateGroupScreen = () => {
    const [groupName, setGroupName] = useState('');
    const dispatch = useDispatch();

    const handleCreateGroup = () => {
        if (!groupName.trim()) {
            Alert.alert('You should enter a group name!')
            return;
        }

        dispatch(addGroup({name: groupName}));
        setGroupName('');
    };

    return (
        <>
            <View style={styles.container}>
                <Logo width={"100"} height={"118"}></Logo>
                <Input
                    placeholder="Group name"
                    value={groupName}
                    onChangeText={setGroupName}
                    style={styles.input}
                />
                <PrimaryButton
                    title="Create"
                    onPress={handleCreateGroup}/>
            </View>
            <GroupsList style={styles.groupList}></GroupsList>
        </>

    );
};

export default CreateGroupScreen;