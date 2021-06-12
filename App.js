/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import BottomBarTab from './app/navigator/BottomBarTab';
import SideDrawer from './app/navigator/SideDrawer';

const App = ()=> {

  return (
    <NavigationContainer>
      <SideDrawer/>
      {/* <BottomBarTab/> */}
    </NavigationContainer>
  );
};

export default App;
