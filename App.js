import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import News from "./screens/News";
import Profile from "./screens/Profile";
import FullInfo from "./screens/FullInfo";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{
            headerTintColor: "#000000",
            headerStyle: { backgroundColor: "#f1f1f1" },
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
