/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomBarTab from './app/navigator/BottomBarTab';
import TopBarTab from './app/navigator/TopBarTab';

const App = ()=> {

  return (
    <NavigationContainer>
      {/* <TopBarTab/> */}
      <BottomBarTab/>
    </NavigationContainer>
  );
};

export default App;
