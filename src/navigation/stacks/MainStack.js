//Modules
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

//Components

import HomeStack from "./HomeStack"
import SignIn from '../../views/SignIn';
import SignUp from '../../views/SignUp';

import { commonHeaderOptions, settingsScreens } from '../NavigationOptions';


const Stack = createStackNavigator();

export default function MainStack({ navigation }) {
  const { user } = useSelector(state => state.session);
  return (
    <Stack.Navigator
      initialRouteName={"SignIn"}
    >

      {!user?.isLoggedIn ? (
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
      )}

      < Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ ...commonHeaderOptions }}
      />

    </Stack.Navigator>
  );
}
