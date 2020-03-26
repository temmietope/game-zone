import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function reviewDetails({ navigation }) {
  // const pressHandler = () => {
  //   navigation.goBack()
  // };
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <Text>{navigation.getParam("rating")}</Text>
      </Card>

      {/* <Button title="Back to Home" onPress={pressHandler} /> */}
    </View>
  );
}
