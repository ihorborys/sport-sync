import {Text, View} from "react-native";
import {styles} from "@/src/screens/CoachScreen/styles";
import Swiper from "react-native-swiper";
import React from "react";

const SwiperComponent = () => {

    return (
        <Swiper loop={false} showsPagination={true}>
            <View style={styles.slide}>
                <Text>Page 1</Text>
            </View>
            <View style={styles.slide}>
                <Text>Page 2</Text>
            </View>
            <View style={styles.slide}>
                <Text>Page 3</Text>
            </View>
        </Swiper>

    );
};


export default SwiperComponent;