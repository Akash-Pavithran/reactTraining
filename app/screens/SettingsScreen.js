/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


function SettingsScreen({navigation}) {
  return (
    <View style={styles.home}>
      <Text style={styles.text}>Settings screen</Text>
    </View>
  );
}


const  styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 50,
    },
});

export default SettingsScreen;
