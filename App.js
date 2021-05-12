/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

const data = [
  {
    id: '1',
    title: 'Jose Diginest',
    photo: require('./app/images/1.jpg'),
  },
  {
    id: '2',
    title: 'Akhil Diginest',
    photo: require('./app/images/2.jpg'),
  },
  {
    id: '3',
    title: 'Shabin Diginest',
    photo: require('./app/images/3.jpg'),
  },
  {
    id: '4',
    title: 'Dipin Diginest',
    photo: require('./app/images/4.jpg'),
  },
  {
    id: '5',
    title: 'Shibu Diginest',
    photo: require('./app/images/5.jpg'),
  },
  {
    id: '6',
    title: 'Shaji Diginest',
    photo: require('./app/images/6.jpg'),
  },
  {
    id: '7',
    title: 'Sudheesh Diginest',
    photo: require('./app/images/7.jpg'),
  },
  {
    id: '8',
    title: 'Nidheesh Diginest',
    photo: require('./app/images/8.jpg'),
  },
  {
    id: '9',
    title: 'Satheesh Diginest',
    photo: require('./app/images/9.jpg'),
  },
  {
    id: '10',
    title: 'Ramesh Diginest',
    photo: require('./app/images/10.jpg'),
  },
];

const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorite Contacts</Text>
      <ScrollView>
        {
          data.map((item) => {
            return (
              <View style={styles.item} key={item.id}>
                <Image style={styles.photo} source={item.photo} />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            );
          })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F8F8F8',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 40,
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
});

export default App;
