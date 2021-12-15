import React from "react";
import { View, Text } from "react-native";
import { style } from "../styles/style";
import { MaterialIcons } from "@expo/vector-icons";

export const NewsCategoryBar = ({ category, setCategory }) => {
  return (
    <View style={style.newsCategoryBar}>
      <View
        style={{
          backgroundColor: category === 1 ? "black" : "white",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 20,
          padding: 10,
          width: 70,
          height: 70,
        }}
      >
        <MaterialIcons
          name="fastfood"
          size={35}
          color="#ff6b00"
          onPress={() => setCategory(1)}
        />
        <Text style={style.newsCategoryItemTitle}>Food</Text>
      </View>
      <View
        style={{
          backgroundColor: category === 2 ? "black" : "white",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 20,
          padding: 10,
          width: 70,
          height: 70,
        }}
      >
        <MaterialIcons
          name="location-city"
          size={35}
          color="#ff6b00"
          onPress={() => setCategory(2)}
        />
        <Text style={style.newsCategoryItemTitle}>City</Text>
      </View>
      <View
        style={{
          backgroundColor: category === 3 ? "black" : "white",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 20,
          padding: 10,
          width: 70,
          height: 70,
        }}
      >
        <MaterialIcons
          name="sports-football"
          size={35}
          color={"#ff6b00"}
          onPress={() => setCategory(3)}
        />
        <Text style={style.newsCategoryItemTitle}>Sport</Text>
      </View>
    </View>
  );
};
