import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView
} from "react-native";
import Swiper from "react-native-swiper";
import daraz from "../assets/banner/daraz.jpg";
import offer1 from "../assets/banner/offer1.jpg";
import offer2 from "../assets/banner/offer2.jpg";
import offer3 from "../assets/banner/offer3.jpg";

var { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([daraz, offer1, offer2, offer3]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 2 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
          >
            {bannerData.map(item => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  //   resizeMode='contain'
                  source={item}
                ></Image>
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20
  }
});

export default Banner;
