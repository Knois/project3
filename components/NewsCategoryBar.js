import React from "react";
import { View } from "react-native";
import { style } from "../styles/style";
import { MaterialIcons } from "@expo/vector-icons";

export const NewsCategoryBar = (changeCategory) => {
  return (
    <View style={style.newsCategoryBar}>
      <MaterialIcons
        name="fastfood"
        size={35}
        color="#ff6b00"
        onPress={() => changeCategory(1)}
        style={style.newsCategoryBarIcon}
      />
      <MaterialIcons
        name="location-city"
        size={35}
        color="#ff6b00"
        onPress={() => changeCategory(2)}
        style={style.newsCategoryBarIcon}
      />
      <MaterialIcons
        name="sports-football"
        size={35}
        color="#ff6b00"
        onPress={() => changeCategory(3)}
        style={style.newsCategoryBarIcon}
      />
    </View>
  );
};
