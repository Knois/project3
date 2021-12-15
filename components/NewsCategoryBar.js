import React from "react";
import { View } from "react-native";
import { style } from "../styles/style";
import { MaterialIcons } from "@expo/vector-icons";

export const NewsCategoryBar = ({ category, setCategory }) => {
  return (
    <View style={style.newsCategoryBar}>
      <MaterialIcons
        name="fastfood"
        size={35}
        color="#ff6b00"
        onPress={() => setCategory(1)}
        style={{
          backgroundColor: category === 1 ? "black" : "white",
          borderRadius: 20,
          padding: 15,
        }}
      />
      <MaterialIcons
        name="location-city"
        size={35}
        color="#ff6b00"
        onPress={() => setCategory(2)}
        style={{
          backgroundColor: category === 2 ? "black" : "white",
          borderRadius: 20,
          padding: 15,
        }}
      />
      <MaterialIcons
        name="sports-football"
        size={35}
        color={"#ff6b00"}
        onPress={() => setCategory(3)}
        style={{
          backgroundColor: category === 3 ? "black" : "white",
          borderRadius: 20,
          padding: 15,
        }}
      />
    </View>
  );
};
