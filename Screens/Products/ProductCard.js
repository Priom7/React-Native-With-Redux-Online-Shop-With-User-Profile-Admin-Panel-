import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Button
} from "react-native";

var { width } = Dimensions.get("window");

const ProductCard = props => {
  const { name, price, image, countStock } = props.item;

  return (
    <View style={styles.container}>
      <Image style={styles.image}></Image>
      <View style={styles.card}></View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white"
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute"
    // top: -45
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center"
  },
  price: {
    fontSize: 20,
    color: "orange",
    marginTop: 10
  }
});
export default ProductCard;
