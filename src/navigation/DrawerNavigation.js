import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Details from '../screens/Details';
import RealTime from '../screens/RealTime';
import DrawerContent from '../components/DrawerContent';
import Movies from '../screens/Movies';

const Drawer = createDrawerNavigator();

const DrawerScreen = props => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Movies" component={Movies} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="RealTime" component={RealTime} />
    </Drawer.Navigator>
  );
};
const Styles = StyleSheet.create({});

export default DrawerScreen;