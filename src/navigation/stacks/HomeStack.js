import * as React from 'react';

// Modules

import { createStackNavigator } from '@react-navigation/stack';

// Views

import Home from '../../views/Home';


// Options

import { commonHeaderOptions, settingsScreens } from '../NavigationOptions';

// Constants


// Home Stack ===================================================================================================================

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ ...commonHeaderOptions }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation, route }) => ({
                    headerShown: false
                })}
            />

            {/* Settings Screens  */}
            {settingsScreens.map((route, i) => {
                return (
                    <Stack.Screen
                        key={i}
                        name={route.name}
                        component={route.screen}
                        options={{
                            ...route.options,
                        }}
                    />
                );
            })}

        </Stack.Navigator>
    );
}