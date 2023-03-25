/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";

import RootNavigator from "./src/routes/Route";

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="default" />
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
