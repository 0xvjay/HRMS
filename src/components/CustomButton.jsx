import { Pressable, StyleSheet, Text } from "react-native";
import { GlobalColours } from "../constants/Constants";

const CustomButton = ({
  children,
  style = null,
  onPress,
  textStyle = null,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed ? styles.pressed : 1,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "80%",
    backgroundColor: GlobalColours.ORANGE,
    borderRadius: 10,
    elevation: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    color: GlobalColours.WHITE,
  },
});
