import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "About GameZone",
      headerStyle: { backgroundColor: "#333" }
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#ccc", height: 100 }
  }
});

export default AboutStack;
