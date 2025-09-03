import {SafeAreaView, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import PrimaryButton from "@components/ui/PrimaryButton/PrimaryButton";
import Logo from "@components/ui/Logo/Logo";
import SectionTitle from "@components/ui/SectionTitle/SectionTitle";
import SectionSubtitle from "@components/ui/SectionSubtitle/SectionSubtitle";
import {HomeScreenNavigationProp} from "@/src/screens/HomeScreen/types";
import {styles} from "./styles";

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();


    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Logo width={"200"} height={"236"}></Logo>
                <View style={styles.titleContainer}>
                    <SectionTitle title={"Train smarter\nPlay harder\nStay synced"} style={styles.title}></SectionTitle>
                    <SectionSubtitle
                        title={"SportSync is a smart app for organizing sports teams, training sessions, and events across any sport."}
                        style={styles.subTitle}></SectionSubtitle>
                </View>
                <PrimaryButton title={"Next"} onPress={() => navigation.navigate("Auth")}></PrimaryButton>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;