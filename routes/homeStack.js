import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GameZone",
      headerStyle: { backgroundColor: "#333" }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "ReviewDetails"
      // headerStyle: {backgroundColor: '#ccc'}
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#ccc" }
  }
});

// export default createAppContainer(HomeStack);

export default HomeStack;
