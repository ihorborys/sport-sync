import {View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import PrimaryButton from "@components/ui/PrimaryButton/PrimaryButton";
import Logo from "@components/ui/Logo/Logo";
import {styles} from "./styles";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import SectionSubtitle from "@components/ui/SectionSubtitle/SectionSubtitle";
import {RootStackParamList} from "@/src/types/RootStackParamList";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    return (
        <View style={styles.container}>
            <Logo width={"200"} height={"236"}></Logo>
            <View style={styles.titleContainer}>
                <SectionTitle title={"Train smarter\nPlay harder\nStay synced"} style={styles.title}></SectionTitle>
                <SectionSubtitle
                    title={"SportSync is a smart app for organizing sports teams, training sessions, and events across any sport."}
                    style={styles.subTitle}></SectionSubtitle>
            </View>
            {/*<Button title="Go to Details" onPress={() => navigation.navigate("Details" as never)}/>*/}
            <PrimaryButton title={"Next"} onPress={() => navigation.navigate("Roles")}></PrimaryButton>

        </View>
    );
}

export default HomeScreen;