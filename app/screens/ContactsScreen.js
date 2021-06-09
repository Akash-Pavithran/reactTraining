/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import TopBar from '../components/TopBar';
import {data} from '../apis/data';

function ContactsScreen({navigation}) {
  return (
    <View style={styles.home}>
      <TopBar/>
      <ScrollView>
        <Text style={styles.heading}>Contacts</Text>
        {
          data.map((item, key) => {
            return (
              <TouchableOpacity style={styles.item} key={item.id}>
                <Image style={styles.photo} source={item.photo} />
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            );
          })
        }
        <View style={styles.blankSpace}/>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 2,
    backgroundColor: '#F8F8F8',
  },
  heading: {
    marginTop:10,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 16,
    paddingTop: 10,
  },
  photo: {
    width:60,
    height:60,
    borderRadius:30,
    marginRight:20,
  },
  blankSpace:{
    height: 120,
  },
});

export default ContactsScreen;