import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import News from "./screens/News";
import Profile from "./screens/Profile";
import FullInfo from "./screens/FullInfo";
import { WHITE, BLACK } from "./constants/constants";
import { SettingsButton } from "./components/SettingsButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{
            headerTintColor: BLACK,
            headerStyle: { backgroundColor: WHITE },
            headerRight: () => <SettingsButton />,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{
            headerTitle: "",
            headerTintColor: BLACK,
            headerStyle: { backgroundColor: WHITE },
            headerRight: () => <SettingsButton />,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
