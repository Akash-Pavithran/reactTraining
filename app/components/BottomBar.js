/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

const BottomBar = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footItems}>
        <TouchableOpacity>
          <Image style={styles.footIcon}
          source={require('../icons/home.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.footIcon}
          source={require('../icons/user.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.footIcon}
          source={require('../icons/bell.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.footIcon}
          source={require('../icons/settings.png')}/>
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
    paddingHorizontal: 30,
  },
  footText: {
    color: 'white',
    fontWeight: '100',
    fontSize: 10,
  },
  footItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footIcon: {
    alignSelf: 'center',
    width: 25,
    height: 25,
  },
});

export default BottomBar;
