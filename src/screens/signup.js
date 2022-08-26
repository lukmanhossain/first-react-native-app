import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from "../components/button";
import Input from "../components/input";

export default function Signup() {
  return (
    <SafeAreaView>
      <View style={{ margin: 25 }}>
        <Input
          placeholder="Email"
          // autoCapitalize={"none"}
          // onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          // onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />

        {/* {error && <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>} */}

        {/* {loading ? ( */}
           {/* <ActivityIndicator /> */}
         {/* ) : ( */}
          <Button
            title="Sign Up"
            customStyles={{ marginTop: 25, alignSelf: "center" }}
            // onPress={login}
          />
        {/* )} */}
      </View>
      {/* onPress={navigateToSignUp} */}
      <TouchableOpacity style={{ marginTop: 20 }}> 
        <Text style={{ textAlign: "center" }}>
          Already have an account? {" "}
          <Text style={{ color: "#18B18D", fontWeight: "bold" }}>Please Login</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    marginBottom: 16,
  },
});