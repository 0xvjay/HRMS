import { FlatList, StyleSheet, View } from "react-native";
import CustomTitleCard from "../components/CustomTitleCard";
import { cardData, CardColours } from "../constants/Constants";

const Dashboard = ({ navigation }) => {
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
        data={cardData}
        renderItem={({ item }) => (
          <CustomTitleCard
            onPress={() => {
              handleNavigation(item);
            }}
            item={item}
            style={randomColour(CardColours)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
