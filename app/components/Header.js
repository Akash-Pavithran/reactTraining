/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.headText}>LOGO</Text>
      </TouchableOpacity>
      <View>
        <TextInput style={styles.searchbox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0fa87d',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  headText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchbox: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 0,
    paddingTop: 0,
    width: 150,
    color: 'white',
  },
});

export default Header;
