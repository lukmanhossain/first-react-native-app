import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Login from "./src/screens/login";
import Signup from "./src/screens/signup";
import Create from "./src/screens/create";
import Update from "./src/screens/update";


const Stack = createNativeStackNavigator();

export default function App() {
  const user = false; // Not authenticated
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {user ? (
          <>
            <Stack.Screen name="Home" component={Home}>
            </Stack.Screen>
            <Stack.Screen name="Create" component={Create}>
            </Stack.Screen>
            <Stack.Screen name="Update" component={Update} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
