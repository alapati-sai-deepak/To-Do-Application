/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
}
