/* eslint-disable prettier/prettier */
import React from 'react';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import StoryContainer from './app/components/StoryContainer';
import {ScrollView, View, Text, StyleSheet} from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Header />
        <ScrollView style={styles.content}>
          <Text style={styles.textHeading}>Stories</Text>
          <StoryContainer/>
          <Text style={styles.contentText}>
            Nam officiis praesentium cupiditate ullam repellendus, laborum
            deleniti possimus atque. Vel voluptatum consequuntur, . Debitis,
            expedita?
          </Text>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  contentText: {
    fontSize: 16,
  },
  textHeading: {
    fontSize: 18,
    fontWeight: '700',
  },
});
