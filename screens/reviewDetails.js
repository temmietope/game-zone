import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function reviewDetails({ navigation }) {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>

      {/* <Button title="Back to Home" onPress={pressHandler} /> */}
    </View>
  );
}
