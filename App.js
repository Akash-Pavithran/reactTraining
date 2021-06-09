/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomBarTab from './app/navigator/BottomBarTab';

const App = ()=> {

  return (
    <NavigationContainer>
      <BottomBarTab/>
    </NavigationContainer>
  );
};

export default App;
