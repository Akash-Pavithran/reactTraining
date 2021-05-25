/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


function HomeScreen({navigation}) {
  return (
    <View style={styles.home}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


const  styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
