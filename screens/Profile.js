import React from "react";
import { Text, View, Button } from "react-native";
import { style } from "../styles/style";

export default function Profile({ navigation }) {
  return (
    <View style={style.body}>
      <Button title="Next" onPress={() => navigation.popToTop()} />
    </View>
  );
}
