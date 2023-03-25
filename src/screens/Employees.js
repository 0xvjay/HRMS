import { FlatList, StyleSheet, View } from "react-native";
import EmployeeCard from "../components/EmployeeCard";

import { employeeCardData } from "../constants/Constants";

const Employees = ({ navigation, route }) => {
  navigation.setOptions({
    title: route.params.item.name,
  });

  const handleNavigation = (id) => {
    navigation.navigate("employeeDetails", { EmployeeId: id });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={employeeCardData}
        renderItem={({ item }) => (
          <EmployeeCard item={item} onPress={() => handleNavigation(item.id)} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Employees;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
