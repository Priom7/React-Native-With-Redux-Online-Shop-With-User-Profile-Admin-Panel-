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
import CategoryFilter from "./CategoryFilter";
const data = require("../../assets/data/products.json");
const products_categories = require("../../assets/data/categories.json");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productFiltered, setProductFiltered] = useState(
    []
  );
  const [focus, setFocus] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productCtg, setProductCtg] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductFiltered(data);
    setFocus(false);
    setCategories(products_categories);
    setActive(-1);
    setInitialState(data);

    return () => {
      setProducts([]);
      setProductFiltered([]);
      setFocus([]);
      setCategories([]);
      setActive();
      setInitialState();
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

  //Categories

  const changeCategory = ctg => {
    {
      ctg == "all"
        ? [setProductCtg(initialState), setActive(true)]
        : [
            setProductCtg(
              products.filter(i => i.category.$oid === ctg),
              setActive(true)
            )
          ];
    }
  };

  return (
    <Container style={{ backgroundColor: "#fdcfdf" }}>
      <Header
        androidStatusBarColor='#fdcfdf'
        searchBar
        rounded
        transparent
      >
        <Item
          style={{
            backgroundColor: "white",
            borderRadius: 30,
            opacity: 0.5
          }}
        >
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
              <CategoryFilter
                categories={categories}
                categoryFilter={changeCategory}
                productCtg={productCtg}
                active={active}
                setActive={setActive}
              ></CategoryFilter>
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
