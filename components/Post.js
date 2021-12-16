import React from "react";
import { TouchableOpacity, Text, ImageBackground, View } from "react-native";
import { style } from "../styles/style";
import { useNavigation } from "@react-navigation/native";
import { ORANGE } from "../constants/constants";

export const Post = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.newsItemBox}
      onPress={() => navigation.navigate("FullInfo", item)}
    >
      <ImageBackground
        source={{ uri: item.img }}
        style={style.newsItemImg}
        imageStyle={{
          borderRadius: 20,
          borderColor: ORANGE,
          borderWidth: 2,
        }}
      >
        <View style={style.newsTitleAndAnonsBox}>
          <Text style={style.newsItemTitle}>{item.title}</Text>
          <Text style={style.newsItemAnons}>{item.anons}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
