import { StyleSheet, Text, View } from "react-native";
import { GlobalColours } from "../constants/Constants";

const DetailsCard = (props) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.name}:</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {props.value === "" ? "-" : props.value}
        </Text>
      </View>
    </View>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: GlobalColours.BLACK,
  },
  titleContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 16,
  },
});
