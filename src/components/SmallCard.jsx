import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalColours } from "../constants/Constants";

const SmallCard = ({ item }) => {
  return (
    <View style={styles.rootContainer}>
      <View>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>{item.department}</Text>
      </View>
    </View>
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 0.4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: GlobalColours.BLACK,
  },
});
