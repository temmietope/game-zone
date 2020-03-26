import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { NavigationEvents } from "react-navigation";

export default function reviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text>Review details Screen</Text>
      <Button title="Back to Home" onPress={pressHandler} />
    </View>
  );
}
