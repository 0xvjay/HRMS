import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet, Pressable } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/dist/Ionicons";

import Login from "../screens/Login";
import VerifyCode from "../screens/VerifyCode";
import ChangeCode from "../screens/ChangeCode";
import Dashboard from "../screens/Dashboard";
import DepartMent from "../screens/Department";
import LogoutModal from "../components/LogoutModal";
import Employees from "../screens/Employees";
import EmployeeDetails from "../screens/EmployeeDetails";
import OnLeave from "../screens/OnLeave";
import { GlobalColours } from "../constants/Constants";
import { getToken } from "../redux/user/user";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const NullComponent = () => null;

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "dashboard";

  switch (routeName) {
    case "dashboard":
      return "Dashboard";
    case "department":
      return "Department";
  }
}

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="department"
        component={DepartMent}
        options={{
          tabBarLabel: "Department",
          tabBarIcon: ({ color }) => (
            <Icon name="folder-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="modal"
        component={NullComponent}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("logout");
          },
        })}
        options={{
          tabBarLabel: "Logout",
          tabBarIcon: ({ color }) => (
            <Icon name="arrow-forward-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const PrivateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={BottomNavigator}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerRight: () => (
            <Pressable
              style={({ pressed }) => [
                styles.searchContainer,
                pressed ? styles.pressed : null,
              ]}
            >
              <Icon name="search-outline" size={24} color={"white"} />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="employees" component={Employees} />
      <Stack.Screen
        name="employeeDetails"
        component={EmployeeDetails}
        options={{ title: "Details" }}
      />
      <Stack.Screen
        name="onleave"
        component={OnLeave}
        options={{ title: "On Leave" }}
      />
      <Stack.Screen
        name="logout"
        component={LogoutModal}
        options={{
          presentation: "containedTransparentModal",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const PublicStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="login" component={Login} options={{ title: "Login" }} />
    <Stack.Screen name="changeCode" component={ChangeCode} />
    <Stack.Screen name="verifyCode" component={VerifyCode} />
  </Stack.Navigator>
);

const RootNavigator = () => {
  const { isAuthenticated } = useSelector((state) => state);

  return (
    <NavigationContainer>
      {!!isAuthenticated ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    borderRadius: 20,
    backgroundColor: GlobalColours.NAVYBLUE,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  pressed: {
    opacity: 0.7,
  },
});

export default RootNavigator;
