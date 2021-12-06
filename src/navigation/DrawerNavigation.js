import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignOut from '../screens/SignOut';
import RealTime from '../screens/RealTime';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerScreen = props => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Signout" component={SignOut} />
      <Drawer.Screen name="RealTime" component={RealTime} />
    </Drawer.Navigator>
  );
};
const Styles = StyleSheet.create({});

export default DrawerScreen;