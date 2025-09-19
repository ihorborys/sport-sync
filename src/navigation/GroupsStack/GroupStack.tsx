import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/src/types/RootStackParamList";
import {SCREENS} from "@/src/constants/screens";
import GroupDetailsScreen from "@/src/screens/GroupDetailsScreen/GroupDetailsScreen";
import GroupsScreen from "@/src/screens/GroupsScreen/GroupsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const GroupsStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name={SCREENS.GROUPS}
            component={GroupsScreen}
        />
        <Stack.Screen
            name={SCREENS.GROUP_DETAILS}
            component={GroupDetailsScreen}
            options={{title: "Group Details"}}
        />
    </Stack.Navigator>
);

export default GroupsStack;
