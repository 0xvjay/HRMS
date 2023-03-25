import { FlatList, StyleSheet, View } from "react-native";
import CustomTitleCard from "../components/CustomTitleCard";

import { departmentData, CardColours } from "../constants/Constants";

const Department = ({ navigation }) => {
  const randomColour = function (obj) {
    const keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  };

  const handleNavigation = (item) => {
    const navigationRoute = item.navigate;

    navigation.navigate(navigationRoute, { item });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={departmentData}
        renderItem={({ item }) => (
          <CustomTitleCard
            item={item}
            style={randomColour(CardColours)}
            onPress={() => {
              handleNavigation(item);
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Department;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
