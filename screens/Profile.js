import React from "react";
import { View, Button } from "react-native";
import { style } from "../styles/style";

export default function Profile({ navigation }) {
  return (
    <View style={style.body}>
      <Button title="Log Out" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
