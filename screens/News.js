import React, { useState } from "react";
import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import { style } from "../styles/style";
import { StatusBar } from "expo-status-bar";
import { Post } from "../components/Post";

export default function News({ navigation }) {
  const [sportNews, setSportNews] = useState([
    {
      title:
        "Max Verstappen: Formula 1 world champion reveals messages from Lewis Hamilton and Mercedes",
      article:
        "Verstappen triumphed after a controversial end to the season amid arguments over the rules after a late-race safety car period that tore the title from Hamiltons grasp. Verstappen said: Toto sent me a text - congratulations on the season and that I deserved to win, that was very nice. The Red Bull driver added: Lewis is a great sportsman in general.",
      img: "https://ichef.bbci.co.uk/onesport/cps/240/cpsprodpb/4F49/production/_122079202_gettyimages-1358593127.jpg",
      key: "1",
    },
    {
      title: "Max Verstappen: Dublicate news",
      article: "Dublicated news",
      img: "https://ichef.bbci.co.uk/onesport/cps/240/cpsprodpb/4F49/production/_122079202_gettyimages-1358593127.jpg",
      key: "2",
    },
    {
      title: "Max Verstappen: Dublicate news",
      article: "Dublicated news",
      img: "https://ichef.bbci.co.uk/onesport/cps/240/cpsprodpb/4F49/production/_122079202_gettyimages-1358593127.jpg",
      key: "3",
    },
    {
      title: "Max Verstappen: Dublicate news",
      article: "Dublicated news",
      img: "https://ichef.bbci.co.uk/onesport/cps/240/cpsprodpb/4F49/production/_122079202_gettyimages-1358593127.jpg",
      key: "4",
    },
    {
      title: "Max Verstappen: Dublicate news",
      article: "Dublicated news",
      img: "https://ichef.bbci.co.uk/onesport/cps/240/cpsprodpb/4F49/production/_122079202_gettyimages-1358593127.jpg",
      key: "5",
    },
    {
      title: "Max Verstappen: Dublicate news",
      article: "Dublicated news",
      img: "https://ichef.bbci.co.uk/onesport/cps/240/cpsprodpb/4F49/production/_122079202_gettyimages-1358593127.jpg",
      key: "6",
    },
    {
      title: "Max Verstappen: Dublicate news",
      article: "Dublicated news",
      img: "https://ichef.bbci.co.uk/onesport/cps/240/cpsprodpb/4F49/production/_122079202_gettyimages-1358593127.jpg",
      key: "7",
    },
    {
      title: "Max Verstappen: Dublicate news",
      article: "Dublicated news",
      img: "https://ichef.bbci.co.uk/onesport/cps/240/cpsprodpb/4F49/production/_122079202_gettyimages-1358593127.jpg",
      key: "8",
    },
  ]);
  return (
    <View style={style.body}>
      <FlatList
        data={sportNews}
        renderItem={({ item }) => <Post item={item} />}
      ></FlatList>
      <StatusBar style="dark" />
    </View>
  );
}
