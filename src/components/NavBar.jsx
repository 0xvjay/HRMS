import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { GlobalColours } from "../constants/Constants";

import CustomButton from "./CustomButton";

const NavBar = ({ onPress }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.calendarButton,
            pressed ? styles.pressed : null,
          ]}
          onPress={onPress}
        >
          <Icon name="calendar" size={26} color="black" />
        </Pressable>
        <View style={styles.twoButtonContainer}>
          <CustomButton
            style={[
              activeIndex == 0 ? styles.activeButton : styles.generalButton,
            ]}
            textStyle={activeIndex == 0 ? null : styles.generalButtonText}
            onPress={() => setActiveIndex(0)}
          >
            Today
          </CustomButton>
          <CustomButton
            style={[
              activeIndex == 1 ? styles.activeButton : styles.generalButton,
            ]}
            textStyle={activeIndex == 1 ? null : styles.generalButtonText}
            onPress={() => setActiveIndex(1)}
          >
            Tomorrow
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  rootContainer: {
    height: 50,
    padding: 5,
  },
  calendarButton: {
    width: 50,
    alignItems: "center",
    paddingVertical: 6,
    maxWidth: 40,
    backgroundColor: GlobalColours.WHITE,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  twoButtonContainer: {
    width: "35%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  pressed: {
    opacity: 0.7,
  },
  generalButton: {
    marginHorizontal: 2,
    backgroundColor: GlobalColours.WHITE,
  },
  activeButton: {
    marginHorizontal: 2,
  },
  generalButtonText: {
    color: GlobalColours.BLACK,
  },
});
// https://w1.read-tokyorevengers.com/manga/tokyo-revengers-chapter-216/
