import {IndexScreen, PokemonDetailsScreen} from '../screens';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator options={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={IndexScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
