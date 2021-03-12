//Modules
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Components
// import DrawerStack from "./DrawerStack"

import HomeStack from "./HomeStack"
import SignIn from '../../views/SignIn';


const Stack = createStackNavigator();

export default function MainStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={"SignIn"}
    >

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
