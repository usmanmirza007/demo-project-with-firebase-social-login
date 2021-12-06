import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons'
import DrawerScreen from './DrawerNavigation';
import Movies from '../screens/Movies';
import RealTime from '../screens/RealTime';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();


const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="DrawerScreen"
        component={DrawerScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="home-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icons name="grid-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="RealTime"
        component={RealTime}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="add-circle-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={RealTime}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="bookmark-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="person-outline" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Styles = StyleSheet.create({});

export default BottomNav;
