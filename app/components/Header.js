/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.headText}>LOGO</Text>
      </TouchableOpacity>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchBox} />
        <TouchableOpacity>
          <Image
            style={styles.searchIcon}
            source={require('../icons/search.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
          style={styles.hamburger}
          source={require('../icons/hamburger.png')}
          />
        </TouchableOpacity>
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
  searchBar: {
    flexDirection: 'row',
  },
  searchBox: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 0,
    paddingTop: 0,
    width: 120,
    color: 'white',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginRight: 10,
  },
  hamburger: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
});

export default Header;
