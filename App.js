import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  LogBox,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "./Shared/Header";
import ProductContainer from "./Screens/Products/ProductContainer";
import { NavigationContainer } from "@react-navigation/native";

//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";
import Main from "./Navigators/Main";

//TO avoid logs
// LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header></Header>
        <Main></Main>
        {/* <ProductContainer></ProductContainer> */}
      </NavigationContainer>
    </Provider>
  );
}
