import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalColours } from "../constants/Constants";

const EmployeeCard = ({ item, style, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed ? styles.pressed : null,
        styles.screen,
        style,
      ]}
      onPress={onPress}
    >
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item.name}
      </Text>
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
        {item.department}
      </Text>
    </Pressable>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 5,
    backgroundColor: GlobalColours.WHITE,
    borderRadius: 20,
    elevation: 4,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalColours.BLACK,
  },
});
