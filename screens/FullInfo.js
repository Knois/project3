import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { style } from "../styles/style";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native-web";

export default function FullInfo({ route }) {
  return (
    <View style={style.body}>
      <ScrollView>
        <Image source={{ uri: route.params.img }} style={style.fullInfoImg} />
        <Text style={style.fullInfoTitle}>{route.params.title}</Text>
        <Text style={style.fullInfoAnons}>{route.params.anons}</Text>
        <Text style={style.fullInfoArticle}>{route.params.article}</Text>
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
}
