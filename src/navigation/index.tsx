import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Products from './Products';
import { NavigationContainer } from '@react-navigation/native';

export enum NavigationScreens {
  PRODUCTS = 'Products'
}

const Stack = createStackNavigator();

/**
 * Root navigator that controls all screens
 */
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name={NavigationScreens.PRODUCTS} 
          component={Products} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
