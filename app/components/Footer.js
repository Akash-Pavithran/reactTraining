/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footItems}>
        <TouchableOpacity>
          <Text style={styles.footText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#0fa87d',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Header;
