import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainHeader} onPress>
        Martial Arts
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9d9d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeader: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'poppins',
    backgroundColor: '#bd4839',
    padding: 10,
    borderRadius: 50,
  },
});
