import React from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View
} from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={require("../assets/Quince.png")}
        resizeMode='contain'
        style={{ height: 50, marginTop: 10 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "#fdcfdf",
    backgroundColor: "gainsboro",
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 20
  }
});

export default Header;
