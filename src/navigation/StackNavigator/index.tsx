import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TasksScreen from '../../journeys/screens/TasksScreen';
import EventsScreen from '../../journeys/screens/EventsScreen';
import LoginScreen from '../../journeys/screens/LoginPage';
import TabNavigation from '../TabNavigator';
import LoginPage from '../../journeys/screens/LoginPage';

export type RootStackParamList = {
  Tasks: undefined;
  Events: undefined;
  LoginScreen: undefined;
  HomePage: undefined;
  LoginPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} options= {{headerShown: false}}/>
      <Stack.Screen name="Tasks" component={TasksScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="HomePage" component={TabNavigation} options= {{headerShown: false}}/>
      <Stack.Screen name="LoginPage" component={LoginPage} options= {{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
