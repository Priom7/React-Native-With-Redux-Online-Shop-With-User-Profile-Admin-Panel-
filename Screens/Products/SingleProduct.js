import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button
} from "react-native";
import { Left, Right, Container, H1 } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

const SingleProduct = props => {
  const [item, setItem] = useState(props.route.params.item);
  const [availability, setAvailability] = useState("");

  return (
    <Container style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={{
              uri: item.image
                ? item.image
                : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png"
            }}
          />
        </View>

        <View style={styles.contentContainer}>
          <H1 style={styles.contentHeader}>
            <Icon name='cube' color='blue' size={25}>
              {" "}
            </Icon>
            {item.name}
          </H1>
          <Text style={styles.contentText}>
            <Icon name='tags' color='green' size={18}>
              {" "}
            </Icon>
            {item.brand}
          </Text>
        </View>
        <View></View>
        <View style={styles.details}>
          <Left>
            <Text
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              <Icon
                name='info-circle'
                color='red'
                size={18}
              >
                {" "}
              </Icon>
              Details:
            </Text>
            <Text>
              <Icon name='star' color='#FFD700'>
                {" "}
              </Icon>
              Rating: ⭐⭐⭐⭐ (1532 Reviews)
            </Text>
            <Text>
              <Icon name='shopping-cart' color='green'>
                {" "}
              </Icon>{" "}
              In Stock: 10
            </Text>
            <Text>
              Summer’s heating up! (Well, almost.) Memorial
              Day will arrive sooner than you think, and
              with temperatures steadily on the rise, the
              time to shop for easy sweet summer dresses is
              now. After months of casual stay-at-home
              attire (shout out to our most loyal sweatpants
              and pajamas), the need for easy, stylish,
              single-item outfits is more essential than
              ever.
            </Text>
          </Left>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Left>
          <Text style={styles.price}>${item.price}</Text>
        </Left>
        <Right style={{ margin: 20 }}>
          <Button color='red' title='Add'></Button>
        </Right>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    backgroundColor: "gainsboro"
  },
  imageContainer: {
    backgroundColor: "gainsboro",
    padding: 0,
    margin: 0
  },
  image: {
    width: "100%",
    height: 250
  },
  contentContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  contentHeader: {
    fontWeight: "bold",
    marginBottom: 20
  },
  contentText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20
  },
  bottomContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white"
  },
  price: {
    fontSize: 24,
    margin: 20,
    color: "red"
  },
  details: {
    // flex: 0.3,
    // margin: 10,
    padding: 10,
    backgroundColor: "white",
    // borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});

export default SingleProduct;
