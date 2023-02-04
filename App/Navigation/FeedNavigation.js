import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import HomeScreen from '../Screens/HomeScreen'
import Facebook from '../Screens/PostLink/Facebook'
import Instagram from '../Screens/PostLink/Instagram'
import Tiktok from '../Screens/PostLink/Tiktok'
import Twitter from '../Screens/PostLink/Twitter'
import Whatsapp from '../Screens/PostLink/Whatsapp'
import Youtube from '../Screens/PostLink/Youtube'

const Stack = createStackNavigator()

const FeedNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
          }}
        />
        <Stack.Screen
          name="whatsapp"
          component={Whatsapp}
          options={{
            presentation: "modal",
            
          }}
        />
        <Stack.Screen name="facebook" component={Facebook} />
        <Stack.Screen name="youtube" component={Youtube} />
        <Stack.Screen name="twitter" component={Twitter} />
        <Stack.Screen name="instagram" component={Instagram} />
        <Stack.Screen name="tiktok" component={Tiktok} />
      </Stack.Navigator>
    )
}

export default FeedNavigation;