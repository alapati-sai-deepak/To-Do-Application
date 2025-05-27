import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import EventsScreen from '../../journeys/screens/EventsScreen';
import styles from './index.styles';
import TasksScreen from '../../journeys/screens/TasksScreen';
import TaskIcon from '../../components/svgs/TaskIcon';
import EventIcon from '../../components/svgs/EventIcon';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const screenWidth = Dimensions.get('window').width;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          return (
            <View style={[styles.tabItem, { width: screenWidth / 2 }]}>
              <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
                {route.name}
              </Text>
            </View>
          );
        },
      })}
      >
      <Tab.Screen name="Tasks" component={TasksScreen}  options={{
          tabBarIcon: () => (
            <TaskIcon
              width={2}
              height={2}
            />
          ),
        }}
        />
      <Tab.Screen name="Events" component={EventsScreen} options={{
          tabBarIcon: () => (
            <EventIcon
              width={5}
              height={5}
            />
          ),
        }} 
        />
    </Tab.Navigator>
  );
}
