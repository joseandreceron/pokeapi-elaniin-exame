//Modules
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

//Components
import MainStack from './src/navigation/stacks/MainStack';
import Home from './src/views/Home';

//Constanst
import { store, persistor } from './src/store/store';

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen
              name="MainStack"
              component={MainStack}
              options={{ headerShown: false }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

console.disableYellowBox = true;
