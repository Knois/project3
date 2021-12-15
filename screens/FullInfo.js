import React from "react";
import { Text, View, Image } from "react-native";
import { style } from "../styles/style";
import { StatusBar } from "expo-status-bar";

export default function FullInfo({ route }) {
  return (
    <View style={style.body}>
      <Image source={{ uri: route.params.img }} style={style.newsImage} />
      <Text style={style.newsTitle}>{route.params.title}</Text>
      <Text style={style.newsArticle}>{route.params.article}</Text>
      <StatusBar style="dark" />
    </View>
  );
}
