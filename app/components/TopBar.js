/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const TopBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.headText}>LOGO</Text>
      </TouchableOpacity>
      <View style={styles.searchBar}>
        {
          showSearch ? (
            <TextInput style={styles.searchBox} />
          ) : null
        }
        <TouchableOpacity onPress={()=>setShowSearch(!showSearch)}>
          <Image
            style={styles.showSearch}
            source={require('../icons/search.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image
        style={styles.hamburger}
        source={require('../icons/hamburger.png')}
        />
      </TouchableOpacity>
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
  showSearch: {
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

export default TopBar;
