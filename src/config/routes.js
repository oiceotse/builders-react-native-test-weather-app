import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainModule} from '../modules';

const HomeScreen = MainModule.HomeFeature.config.Navigator;
const WelcomeScreen = MainModule.WelcomeFeature.config.Navigator;

const Stack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    {global.store.getState().setViewedReducerPersisted.hasViewed ? (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    )}
  </NavigationContainer>
);
export default Navigator;
