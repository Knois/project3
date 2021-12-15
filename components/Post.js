import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { style } from "../styles/style";
import { useNavigation } from "@react-navigation/native";

export const Post = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.newsItem}
      onPress={() => navigation.navigate("FullInfo", item)}
    >
      <Image source={{ uri: item.img }} style={{ width: 200, height: 100 }} />
      <Text style={style.newsTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};
