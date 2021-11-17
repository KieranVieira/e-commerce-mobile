import React, { useCallback } from 'react';
import { RouteProp, ParamListBase } from '@react-navigation/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import styled, { useTheme } from 'styled-components/native';

import Shop from './Shop';
import Cart from './Cart';
import ShopIcon from '../icons/Shop';
import CartIcon from '../icons/Cart';

type Route = RouteProp<ParamListBase, string>;
export enum NavigationScreens {
  SHOP = 'Shop',
  CART = 'Cart'
}

const TAB_BAR_HEIGHT = 100;
const Tab = createBottomTabNavigator();

/**
 * Root navigator that controls all screens
 */
const Navigation = () => {
  const theme = useTheme();

  /**
   * Handles getting the tab bar icon to be rendered in the bottom navigation
   * 
   * @param route - Route passed from the navigator
   * @param isFocused - True if the current item is focussed
   */
  const getTabBarIcon = useCallback((route: Route, isFocused: boolean) => {
    const iconProps = {
      stroke: theme.colors.textMain,
      fill: isFocused ? theme.colors.textMain : undefined
    }

    switch (route.name) {
      case NavigationScreens.SHOP: {
        return <ShopIcon {...iconProps} />
      }

      case NavigationScreens.CART: {
        return <CartIcon {...iconProps} />
      }
    }

  }, [theme]);

  /**
   * Handles getting the label for the tab bar if it is focused.
   * 
   * @param route - Route passed from the navigator
   * @param isFocused - True if the current item is focussed
   */
  const getTabBarLabel = useCallback((route: Route, isFocused: boolean) => {
    if (isFocused) {
      return <LabelText>{route.name}</LabelText>
    }

    return null;
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => getTabBarIcon(route, focused),
          tabBarLabel: ({ focused }) => getTabBarLabel(route, focused),
          tabBarItemStyle: { height: 50, marginVertical: theme.spacing.sm },
        })}
      >
        <Tab.Screen 
          name={NavigationScreens.SHOP} 
          component={Shop} 
        />
        <Tab.Screen
          name={NavigationScreens.CART} 
          component={Cart}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const LabelText = styled.Text`
  color: ${({theme}) => theme.colors.textMain};
  font-size: ${({theme}) => theme.text.xsm}px;
  font-weight: 700;
`;

export default Navigation
