import React from "react";
import { Text, View, Button } from "react-native";
import { style } from "../styles/style";

export default function News({ navigation }) {
  return (
    <View style={style.body}>
      <Button title="Next" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}
