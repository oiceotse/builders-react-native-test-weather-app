import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {IndexScreen} from '../screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="IndexScreen" component={IndexScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
