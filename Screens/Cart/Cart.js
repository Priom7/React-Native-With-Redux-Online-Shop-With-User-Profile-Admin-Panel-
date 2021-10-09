import React from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";

const Cart = (props) => {
  console.log(props);
  return (
    <View style={{ flex: 1 }}>
      {props.cartItems.map((item) => {
        return <Text>{item.product.name}</Text>;
      })}
    </View>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};
export default connect(mapStateToProps, null)(Cart);
