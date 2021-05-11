import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView
} from "react-native";
import {
  Container,
  Header,
  Icon,
  Item,
  Input,
  Text
} from "native-base";
import ProductList from "./ProductList";
import SearchedProducts from "./SearchedProducts";
import Banner from "../../Shared/Banner";
const data = require("../../assets/data/products.json");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productFiltered, setProductFiltered] = useState(
    []
  );
  const [focus, setFocus] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductFiltered(data);
    setFocus(false);

    return () => {
      setProducts([]);
      setProductFiltered([]);
      setFocus([]);
    };
  }, []);

  const searchProduct = text => {
    setProductFiltered(
      products.filter(i =>
        i.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <Container>
      <Header
        androidStatusBarColor='pink'
        searchBar
        rounded
        transparent
      >
        <Item>
          <Icon name='ios-search'></Icon>
          <Input
            placeholder='Search'
            onFocus={openList}
            onChangeText={text => searchProduct(text)}
          ></Input>
          {focus == true ? (
            <Icon onPress={onBlur} name='ios-close'></Icon>
          ) : null}
        </Item>
      </Header>
      {focus == true ? (
        <SearchedProducts
          productFiltered={productFiltered}
        ></SearchedProducts>
      ) : (
        <ScrollView>
          <View>
            <View>
              <Banner></Banner>
            </View>
            <View>
              <FlatList
                numColumns={2}
                data={products}
                renderItem={({ item }) => (
                  <ProductList key={item.id} item={item} />
                )}
                keyExtractor={item => item.name}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </Container>
  );
};

export default ProductContainer;
