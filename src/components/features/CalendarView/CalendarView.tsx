import React, {useState} from "react";
import {View} from "react-native";
import {Calendar} from "react-native-calendars";
import {COLORS} from "@/src/constants/colors";
import {styles} from "./styles";

const CalendarView = () => {
    const [selected, setSelected] = useState("");

    return (
        <View style={styles.container}>
            <Calendar
                // style={{borderWidth: 1, borderColor: COLORS.primary, height: 500}}
                onDayPress={(day) => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {
                        selected: true,
                        selectedColor: COLORS.primaryDark,
                    },
                }}
                theme={{
                    todayTextColor: COLORS.red,
                    arrowColor: COLORS.primary,
                }}
            />
        </View>
    );
};


export default CalendarView;
