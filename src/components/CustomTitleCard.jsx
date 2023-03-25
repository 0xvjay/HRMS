import { Image, Pressable, StyleSheet, View } from "react-native";
import { GlobalColours, GlobalFonts } from "../constants/Constants";
import CustomTitle from "./CustomTitle";

const CustomTitleCard = ({ item, onPress, style = null }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.rootContainer,
        pressed ? styles.pressed : null,
        { backgroundColor: style },
      ]}
      onPress={onPress}
    >
      <View style={styles.mainContainer}>
        <CustomTitle style={styles.titleText}>{item.name}</CustomTitle>
        <CustomTitle style={styles.countText}>{item.count}</CustomTitle>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/computer.png")}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CustomTitleCard;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: GlobalColours.GREEN,
    marginHorizontal: 10,
    margin: 10,
    height: 170,
    borderRadius: 20,
    elevation: 4,
  },
  mainContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginHorizontal: 6,
    marginVertical: 4,
  },
  titleText: {
    fontFamily: GlobalFonts.regular,
    color: GlobalColours.WHITE,
    fontSize: 22,
  },
  countText: {
    fontFamily: GlobalFonts.regular,
    color: GlobalColours.WHITE,
    fontSize: 40,
  },
  pressed: {
    opacity: 0.7,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: GlobalColours.WHITE,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    borderRadius: 30,
    bottom: 0,
    position: "absolute",
  },
  icon: {
    width: 40,
    height: 40,
    position: "absolute",
  },
});
