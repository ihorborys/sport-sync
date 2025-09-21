import {Text, View} from "react-native";
import {styles} from "./styles";
import Swiper from "react-native-swiper";
import React from "react";
import {COLORS} from "@/src/constants/colors";

const SwiperComponent = () => {

    return (
        <Swiper
            loop={false}
            showsPagination={true}>
            activeDotColor={COLORS.primary} // колір активної точки
            dotColor={COLORS.grey} // колір неактивних точок
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