import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { style } from "../styles/style";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login({ navigation }) {
  const [text, onChangeText] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [warningMessage, changeWarningMessage] = useState("");
  const showWarning = () => (
    changeWarningMessage("Wrong email or password"),
    setTimeout(() => changeWarningMessage(""), 3000)
  );

  return (
    <KeyboardAwareScrollView style={style.body}>
      <View style={style.loginHeaderBox}>
        <Text style={style.loginHeaderTitle}>Welcome</Text>
        <Text style={style.loginHeaderText}>
          We offer the best and useful news app
        </Text>
      </View>
      <Text style={style.warningMessage}>{warningMessage}</Text>
      <View style={style.loginInputBox}>
        <Ionicons name="person" size={24} color="#000000" />
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter your login"
          placeholderTextColor="#9b9bb7"
          textAlign="center"
          maxLength={20}
          style={style.loginInput}
        />
      </View>
      <View style={style.loginInputBox}>
        <Ionicons name="key-outline" size={24} color="#000000" />
        <TextInput
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter your password"
          placeholderTextColor="#9b9bb7"
          textAlign="center"
          maxLength={20}
          style={style.loginInput}
          secureTextEntry={true}
        />
      </View>
      <Text style={style.messagePrivacyPolicy}>
        By signing up, you agree to the
        <Text style={style.messagePrivacyPolicyLink}> Privacy Policy</Text> and
        <Text style={style.messagePrivacyPolicyLink}> Terms & Conditions</Text>
      </Text>
      <TouchableOpacity
        style={style.goButton}
        onPress={
          text === "123" && number === "321"
            ? () => navigation.navigate("News")
            : () => showWarning()
        }
      >
        <Text style={style.goButtonText}>GO</Text>
      </TouchableOpacity>
      <View style={style.loginBoxLast}>
        <Text style={style.messagePrivacyPolicy}>
          Don't have an account?{" "}
          <Text style={style.messagePrivacyPolicyLink}>Register here</Text>
        </Text>
      </View>
      <StatusBar style="dark" />
    </KeyboardAwareScrollView>
  );
}
