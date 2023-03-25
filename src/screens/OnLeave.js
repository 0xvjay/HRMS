import { useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Calendar } from "react-native-calendars";

import NavBar from "../components/NavBar";
import SmallCard from "../components/SmallCard";
import { employeeCardData, GlobalColours } from "../constants/Constants";

const OnLeave = () => {
  const refRBSheet = useRef(null);
  const [selectedDate, setSelectedDate] = useState();

  return (
    <View style={styles.screen}>
      <NavBar onPress={() => refRBSheet.current.open()} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={employeeCardData}
          renderItem={({ item }) => <SmallCard item={item} />}
          keyExtractor={(item) => item.id}
        />
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          customStyles={{
            container: { flex: 1 },
          }}
          onClose={() => setSelectedDate()}
        >
          <Calendar
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
            }}
            initialDate={selectedDate}
            theme={{
              "stylesheet.day.basic": {
                base: {
                  width: 24,
                  height: 24,
                  alignItems: "center",
                },
                text: {
                  fontSize: 14,
                  marginTop: 2,
                },
                selected: {
                  borderRadius: 6,
                  backgroundColor: GlobalColours.NAVYBLUE,
                },
                todayText: {
                  color: GlobalColours.RED,
                },
              },
              "stylesheet.calendar.header": {
                week: {
                  flexDirection: "row",
                  justifyContent: "space-around",
                },
                header: {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 10,
                  paddingRight: 10,
                  alignItems: "center",
                },
              },
              arrowColor: GlobalColours.NAVYBLUE,
            }}
          />
        </RBSheet>
      </View>
    </View>
  );
};

export default OnLeave;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
});
// https://w3.readjujutsu.com/manga/jujutsukaisen-chapter-4-91/
