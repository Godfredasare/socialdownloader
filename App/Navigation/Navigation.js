import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AppNavigation from "./AppNavigation";
import Whatsapp from "../Screens/PostLink/Whatsapp";
import Facebook from "../Screens/PostLink/Facebook";
import Instagram from "../Screens/PostLink/Instagram";
import Youtube from "../Screens/PostLink/Youtube";
import Tiktok from "../Screens/PostLink/Tiktok";
import Twitter from "../Screens/PostLink/Twitter";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="App" component={AppNavigation} />
      <Stack.Screen
        name="whatsapp"
        component={Whatsapp}
        options={{
          // presentation: 'card',
          gestureEnabled: true,
          gestureDirection: 'horizontal-inverted'
        }}
      />
      <Stack.Screen name="facebook" component={Facebook} />
      <Stack.Screen name="youtube" component={Youtube} />
      <Stack.Screen name="twitter" component={Twitter} />
      <Stack.Screen name="instagram" component={Instagram} />
      <Stack.Screen name="tiktok" component={Tiktok} />
    </Stack.Navigator>
  );
}

export default Navigation;
