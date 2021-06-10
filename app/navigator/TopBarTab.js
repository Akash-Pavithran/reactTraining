/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ContactsScreen from '../screens/ContactsScreen';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home2" component={HomeScreen} />
        <Drawer.Screen name="Contact2" component={ContactsScreen} />
    </Drawer.Navigator>
  );
}
