/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ContactsScreen from '../screens/ContactsScreen';

const Drawer = createDrawerNavigator();

export default function sideDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home 2" component={HomeScreen} />
        <Drawer.Screen name="Contact 2" component={ContactsScreen} />
    </Drawer.Navigator>
  );
}
