import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { ListItem, Badge, Text, Icon } from "native-base";

const CategoryFilter = props => {
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{ backgroundColor: "transparent" }}
    >
      <ListItem
        style={{ margin: 0, padding: 0, borderRadius: 0 }}
      >
        <TouchableOpacity
          key={1}
          onPress={() => {
            props.categoryFilter("all"),
              props.setActive(-1);
          }}
        >
          <Badge
            style={[
              styles.center,
              { margin: 5 },
              props.active == -1
                ? styles.active
                : styles.inactive
            ]}
          >
            <Text style={{ color: "white" }}>
              {" "}
              <Icon name='list'></Icon>All
            </Text>
          </Badge>
        </TouchableOpacity>
        {props.categories.map(item => (
          <TouchableOpacity
            key={item._id}
            onPress={() => {
              props.categoryFilter(item._id.$oid),
                props.setActive(
                  props.categories.indexOf(item)
                );
            }}
          >
            <Badge
              style={[
                styles.center,
                { margin: 5 },
                props.active ==
                props.categories.indexOf(item)
                  ? styles.active
                  : styles.inactive
              ]}
            >
              <Text style={{ color: "white" }}>
                <Icon name='cart'></Icon>
                {item.name}
              </Text>
            </Badge>
          </TouchableOpacity>
        ))}
      </ListItem>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundColor: "#bce6eb",
    elevation: 8
  },
  inactive: {
    backgroundColor: "#fca3cc"
  }
});

export default CategoryFilter;
