import React from "react";
import { Text, View, Button } from "react-native";
import { style } from "../styles/style";
import { StatusBar } from "expo-status-bar";

export default function Login({ navigation }) {
  return (
    <View style={style.body}>
      <View style={{ backgroundColor: "white" }}>
        <StatusBar style="light" />
        <Text>Welcomeww</Text>
      </View>
    </View>
  );
}
