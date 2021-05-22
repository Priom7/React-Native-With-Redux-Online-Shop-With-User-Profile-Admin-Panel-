import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ScrollView,
  Dimensions
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
import { useLinkProps } from "@react-navigation/native";
const data = require("../../assets/data/products.json");
const products_categories = require("../../assets/data/categories.json");

var { height } = Dimensions.get("window");

const ProductContainer = props => {
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
    setProductCtg(data);

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
    <Container style={{ backgroundColor: "gainsboro" }}>
      <Header
        androidStatusBarColor='gainsboro'
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
          navigation={props.navigation}
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
            {productCtg.length > 0 ? (
              <View style={styles.listContainer}>
                {productCtg.map(item => {
                  return (
                    <ProductList
                      navigation={props.navigation}
                      key={item.id}
                      item={item}
                    />
                  );
                })}
              </View>
            ) : (
              <View
                style={[
                  styles.center,
                  { height: height / 2 }
                ]}
              >
                <Text>No products found</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    // backgroundColor: "#fdcfdf"
    backgroundColor: "gainsboro"
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    // backgroundColor: "#fdcfdf"
    backgroundColor: "gainsboro"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ProductContainer;
