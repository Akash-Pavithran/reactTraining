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
import StoryContainer from '../components/StoryContainer';


const data = [
  {
    id: '1',
    title: 'Jose Diginest',
    photo: require('../images/1.jpg'),
  },
  {
    id: '2',
    title: 'Akhil Diginest',
    photo: require('../images/2.jpg'),
  },
  {
    id: '3',
    title: 'Shabin Diginest',
    photo: require('../images/3.jpg'),
  },
  {
    id: '4',
    title: 'Dipin Diginest',
    photo: require('../images/4.jpg'),
  },
  {
    id: '5',
    title: 'Shibu Diginest',
    photo: require('../images/5.jpg'),
  },
  {
    id: '6',
    title: 'Shaji Diginest',
    photo: require('../images/6.jpg'),
  },
  {
    id: '7',
    title: 'Sudheesh Diginest',
    photo: require('../images/7.jpg'),
  },
  {
    id: '8',
    title: 'Nidheesh Diginest',
    photo: require('../images/8.jpg'),
  },
  {
    id: '9',
    title: 'Satheesh Diginest',
    photo: require('../images/9.jpg'),
  },
  {
    id: '10',
    title: 'Ramesh Diginest',
    photo: require('../images/10.jpg'),
  },
];

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TopBar/>
      <ScrollView>
        <Text style={styles.heading}>Home</Text>
        <StoryContainer/>

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


export default HomeScreen;
