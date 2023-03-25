import { StyleSheet, Text, View } from "react-native";
import { GlobalColours, GlobalFonts } from "../constants/Constants";

const CustomTitle = ({ children, style = null }) => {
  return (
    <View style={styles.screen}>
      <Text textBreakStrategy="simple" style={[styles.titleText, style]}>
        {children}
      </Text>
    </View>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  titleText: {
    padding: 5,
    fontSize: 26,
    color: GlobalColours.BLACK,
    fontFamily: GlobalFonts.bold,
  },
});
